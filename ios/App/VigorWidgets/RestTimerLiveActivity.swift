import ActivityKit
import WidgetKit
import SwiftUI

@available(iOS 16.2, *)
public struct RestTimerLiveActivity: Widget {
    public init() {}

    public var body: some WidgetConfiguration {
        ActivityConfiguration(for: RestTimerAttributes.self) { context in
            // MARK: - LOCK SCREEN & NOTIFICATION BANNER (Exact Apple Clock Timer Style)
            HStack(spacing: 16) {
                // Left Icon / Progress Indicator
                ZStack {
                    Circle()
                        .fill(Color.orange.opacity(0.2))
                        .frame(width: 48, height: 48)
                    Image(systemName: "timer")
                        .font(.system(size: 24, weight: .bold))
                        .foregroundColor(.orange)
                }

                // Center Info: Exercise & User
                VStack(alignment: .leading, spacing: 4) {
                    Text(context.attributes.exerciseName)
                        .font(.system(size: 16, weight: .bold))
                        .foregroundColor(.white)
                        .lineLimit(1)

                    HStack(spacing: 6) {
                        Text(context.attributes.userName.uppercased())
                            .font(.system(size: 11, weight: .heavy, design: .monospaced))
                            .foregroundColor(context.attributes.userName.lowercased().contains("facu") ? .cyan : .pink)
                        Text("•  DESCANSO")
                            .font(.system(size: 11, weight: .semibold))
                            .foregroundColor(.gray)
                    }
                }

                Spacer()

                // Right: Big Apple Timer Countdown Clock
                VStack(alignment: .trailing, spacing: 2) {
                    Text(timerInterval: Date()...context.state.endTime, countsDown: true)
                        .monospacedDigit()
                        .font(.system(size: 32, weight: .bold, design: .rounded))
                        .foregroundColor(Color.orange)
                    
                    ProgressView(timerInterval: Date()...context.state.endTime, countsDown: true)
                        .tint(Color.orange)
                        .frame(width: 80)
                }
            }
            .padding(.horizontal, 20)
            .padding(.vertical, 16)
            .activityBackgroundTint(Color.black.opacity(0.92))
            .activitySystemActionForegroundColor(Color.orange)

        } dynamicIsland: { context in
            DynamicIsland {
                // MARK: - EXPANDED DYNAMIC ISLAND
                DynamicIslandExpandedRegion(.leading) {
                    HStack(spacing: 8) {
                        Image(systemName: "timer")
                            .font(.system(size: 18, weight: .bold))
                            .foregroundColor(.orange)
                        
                        VStack(alignment: .leading, spacing: 2) {
                            Text(context.attributes.exerciseName)
                                .font(.system(size: 14, weight: .bold))
                                .foregroundColor(.white)
                                .lineLimit(1)
                            Text(context.attributes.userName.uppercased())
                                .font(.system(size: 10, weight: .black, design: .monospaced))
                                .foregroundColor(context.attributes.userName.lowercased().contains("facu") ? .cyan : .pink)
                        }
                    }
                    .padding(.leading, 6)
                }

                DynamicIslandExpandedRegion(.trailing) {
                    Text(timerInterval: Date()...context.state.endTime, countsDown: true)
                        .monospacedDigit()
                        .font(.system(size: 28, weight: .bold, design: .rounded))
                        .foregroundColor(Color.orange)
                        .padding(.trailing, 6)
                }

                DynamicIslandExpandedRegion(.bottom) {
                    ProgressView(timerInterval: Date()...context.state.endTime, countsDown: true)
                        .tint(Color.orange)
                        .padding(.horizontal, 8)
                        .padding(.top, 6)
                }
            } compactLeading: {
                // MARK: - COMPACT LEADING (Orange Timer Icon & Trainee)
                HStack(spacing: 3) {
                    Image(systemName: "timer")
                        .font(.system(size: 11, weight: .bold))
                        .foregroundColor(.orange)
                    Text(context.attributes.userName.prefix(1).uppercased())
                        .font(.system(size: 10, weight: .black, design: .monospaced))
                        .foregroundColor(.white)
                }
                .padding(.leading, 4)
            } compactTrailing: {
                // MARK: - COMPACT TRAILING (Live Ticking Countdown digits)
                Text(timerInterval: Date()...context.state.endTime, countsDown: true)
                    .monospacedDigit()
                    .font(.system(size: 13, weight: .bold, design: .rounded))
                    .foregroundColor(Color.orange)
                    .frame(width: 44, alignment: .trailing)
                    .padding(.trailing, 4)
            } minimal: {
                // MARK: - MINIMAL (Circular Orange Timer Icon)
                Image(systemName: "timer")
                    .font(.system(size: 11, weight: .bold))
                    .foregroundColor(.orange)
            }
        }
    }
}
