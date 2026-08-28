import ActivityKit
import WidgetKit
import SwiftUI

@available(iOS 16.1, *)
public struct RestTimerLiveActivity: Widget {
    public init() {}
    
    public var body: some WidgetConfiguration {
        ActivityConfiguration(for: RestTimerAttributes.self) { context in
            // Lock Screen / StandBy Banner UI
            ZStack {
                Color(red: 0.02, green: 0.04, blue: 0.09) // Slate-950
                
                VStack(spacing: 8) {
                    HStack {
                        HStack(spacing: 4) {
                            Image(systemName: "bolt.fill")
                                .font(.system(size: 12, weight: .bold))
                                .foregroundColor(context.attributes.userName.lowercased().contains("facu") ? .cyan : .pink)
                            Text(context.attributes.userName.uppercased())
                                .font(.system(size: 11, weight: .black, design: .monospaced))
                                .foregroundColor(.white)
                        }
                        .padding(.horizontal, 8)
                        .padding(.vertical, 4)
                        .background(Color(red: 0.08, green: 0.12, blue: 0.2))
                        .cornerRadius(6)
                        
                        Spacer()
                        
                        Text("VIGOR GYM")
                            .font(.system(size: 10, weight: .black, design: .monospaced))
                            .foregroundColor(.gray)
                    }
                    
                    HStack(alignment: .center) {
                        VStack(alignment: .leading, spacing: 2) {
                            Text(context.attributes.exerciseName)
                                .font(.system(size: 16, weight: .bold))
                                .foregroundColor(.white)
                                .lineLimit(1)
                            
                            Text("TIEMPO DE DESCANSO")
                                .font(.system(size: 10, weight: .bold, design: .monospaced))
                                .foregroundColor(.gray)
                        }
                        
                        Spacer()
                        
                        // Live native ticking countdown timer
                        Text(timerInterval: Date()...context.state.endTime, countsDown: true)
                            .monospacedDigit()
                            .font(.system(size: 32, weight: .black, design: .monospaced))
                            .foregroundColor(Color(red: 0.8, green: 1.0, blue: 0.0)) // Vigor Neon Lime
                    }
                    
                    ProgressView(timerInterval: Date()...context.state.endTime, countsDown: true)
                        .tint(Color(red: 0.8, green: 1.0, blue: 0.0))
                }
                .padding(16)
            }
            .activityBackgroundTint(Color.black.opacity(0.9))
            
        } dynamicIsland: { context in
            DynamicIsland {
                // EXPANDED DYNAMIC ISLAND
                DynamicIslandExpandedRegion(.leading) {
                    VStack(alignment: .leading, spacing: 2) {
                        HStack(spacing: 4) {
                            Image(systemName: "bolt.fill")
                                .font(.system(size: 10, weight: .bold))
                                .foregroundColor(context.attributes.userName.lowercased().contains("facu") ? .cyan : .pink)
                            Text(context.attributes.userName.uppercased())
                                .font(.system(size: 10, weight: .black, design: .monospaced))
                                .foregroundColor(.white)
                        }
                        Text(context.attributes.exerciseName)
                            .font(.system(size: 14, weight: .bold))
                            .foregroundColor(.white)
                            .lineLimit(1)
                    }
                    .padding(.leading, 4)
                }
                
                DynamicIslandExpandedRegion(.trailing) {
                    VStack(alignment: .trailing, spacing: 0) {
                        Text("DESCANSO")
                            .font(.system(size: 9, weight: .black, design: .monospaced))
                            .foregroundColor(.gray)
                        Text(timerInterval: Date()...context.state.endTime, countsDown: true)
                            .monospacedDigit()
                            .font(.system(size: 24, weight: .black, design: .monospaced))
                            .foregroundColor(Color(red: 0.8, green: 1.0, blue: 0.0))
                    }
                    .padding(.trailing, 4)
                }
                
                DynamicIslandExpandedRegion(.bottom) {
                    ProgressView(timerInterval: Date()...context.state.endTime, countsDown: true)
                        .tint(Color(red: 0.8, green: 1.0, blue: 0.0))
                        .padding(.horizontal, 4)
                        .padding(.top, 4)
                }
            } compactLeading: {
                // COMPACT LEADING (Left Pill)
                HStack(spacing: 3) {
                    Image(systemName: "bolt.fill")
                        .font(.system(size: 9, weight: .bold))
                        .foregroundColor(context.attributes.userName.lowercased().contains("facu") ? .cyan : .pink)
                    Text(context.attributes.userName.prefix(1).uppercased())
                        .font(.system(size: 11, weight: .black, design: .monospaced))
                        .foregroundColor(.white)
                }
            } compactTrailing: {
                // COMPACT TRAILING (Right Pill - Native Live Ticking Timer)
                Text(timerInterval: Date()...context.state.endTime, countsDown: true)
                    .monospacedDigit()
                    .font(.system(size: 12, weight: .black, design: .monospaced))
                    .foregroundColor(Color(red: 0.8, green: 1.0, blue: 0.0))
                    .frame(width: 44, alignment: .trailing)
            } minimal: {
                // MINIMAL CIRCLE
                Image(systemName: "timer")
                    .font(.system(size: 11, weight: .bold))
                    .foregroundColor(Color(red: 0.8, green: 1.0, blue: 0.0))
            }
        }
    }
}
