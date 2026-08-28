require 'xcodeproj'

project_path = 'ios/App/App.xcodeproj'
project = Xcodeproj::Project.open(project_path)

app_target = project.targets.find { |t| t.name == 'App' }
if app_target.nil?
  puts "Error: App target not found"
  exit 1
end

# CLEANUP: Remove any existing references to RestTimerAttributes.swift to avoid duplicates
existing_refs = project.files.select { |f| f.path == 'RestTimerAttributes.swift' }
existing_refs.each do |ref|
  app_target.source_build_phase.remove_file_reference(ref)
  ref.remove_from_project
  puts "Cleaned up old RestTimerAttributes.swift reference."
end

if project.targets.any? { |t| t.name == 'VigorWidgets' }
  puts "Target VigorWidgets already exists."
  exit 0
end

puts "Creating VigorWidgets target..."
widget_target = project.new_target(:app_extension, 'VigorWidgets', :ios, '16.2')
widget_target.product_name = 'VigorWidgets'

# VigorWidgets group
widget_group = project.main_group.find_subpath('VigorWidgets', true)
widget_group.set_source_tree('<group>')
widget_group.set_path('VigorWidgets')

# Files
files = ['RestTimerAttributes.swift', 'RestTimerLiveActivity.swift', 'VigorWidgetsBundle.swift']
file_refs = {}

files.each do |file_name|
  file_refs[file_name] = widget_group.new_reference(file_name)
  widget_target.source_build_phase.add_file_reference(file_refs[file_name])
end

info_plist_ref = widget_group.new_reference('Info.plist')

# Ensure RestTimerAttributes is ALSO in the main App target
app_sources = app_target.source_build_phase
unless app_sources.files_references.include?(file_refs['RestTimerAttributes.swift'])
  app_sources.add_file_reference(file_refs['RestTimerAttributes.swift'])
  puts "Added RestTimerAttributes.swift to main App target."
end

# Build Settings for Widget
widget_target.build_configurations.each do |config|
  config.build_settings['INFOPLIST_FILE'] = 'VigorWidgets/Info.plist'
  config.build_settings['PRODUCT_BUNDLE_IDENTIFIER'] = 'com.vigor.app.VigorWidgets'
  config.build_settings['PRODUCT_NAME'] = 'VigorWidgets'
  config.build_settings['SWIFT_VERSION'] = '5.0'
  config.build_settings['TARGETED_DEVICE_FAMILY'] = '1'
  config.build_settings['SKIP_INSTALL'] = 'YES'
  config.build_settings['CODE_SIGN_STYLE'] = 'Manual'
  
  # Ensure these are empty to allow manual signing with 3uTools later
  config.build_settings['CODE_SIGN_IDENTITY'] = ''
  config.build_settings['PROVISIONING_PROFILE_SPECIFIER'] = ''
  config.build_settings['DEVELOPMENT_TEAM'] = ''
end

# Add Frameworks
frameworks_group = project.frameworks_group
%w[WidgetKit SwiftUI ActivityKit].each do |framework|
  ref = frameworks_group.new_reference("System/Library/Frameworks/#{framework}.framework")
  ref.source_tree = 'SDKROOT'
  widget_target.frameworks_build_phase.add_file_reference(ref, true)
end

# Embed extension into App
embed_phase = app_target.new_copy_files_build_phase('Embed App Extensions')
embed_phase.dst_subfolder_spec = '13' # plug-ins
embed_phase.symbol_dst_subfolder_spec = :plug_ins
build_file = embed_phase.add_file_reference(widget_target.product_reference)
build_file.settings = { 'ATTRIBUTES' => ['RemoveHeadersOnCopy'] }

# Link App target dependency
app_target.add_dependency(widget_target)

project.save
puts "Successfully added VigorWidgets target."
