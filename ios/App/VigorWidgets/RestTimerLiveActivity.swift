import ActivityKit
import WidgetKit
import SwiftUI

@available(iOS 16.2, *)
public struct RestTimerLiveActivity: Widget {
    public init() {}

    public var body: some WidgetConfiguration {
        ActivityConfiguration(for: RestTimerAttributes.self) { context in
            // MARK: - LOCK SCREEN & NOTIFICATION BANNER
            VStack(spacing: 0) {
                if let facu = context.state.facu {
                    UserTimerRow(state: facu, userName: "Facu", color: .cyan)
                }
                
                if context.state.facu != nil && context.state.alma != nil {
                    Divider().background(Color.white.opacity(0.2))
                }
                
                if let alma = context.state.alma {
                    UserTimerRow(state: alma, userName: "Alma", color: .pink)
                }
            }
            .activityBackgroundTint(Color.black.opacity(0.92))
            .activitySystemActionForegroundColor(Color.orange)

        } dynamicIsland: { context in
            DynamicIsland {
                // MARK: - EXPANDED DYNAMIC ISLAND
                DynamicIslandExpandedRegion(.leading) {
                    VStack(alignment: .leading, spacing: 4) {
                        if let facu = context.state.facu {
                            UserExpandedInfo(state: facu, userName: "Facu", color: .cyan)
                        }
                        if let alma = context.state.alma {
                            UserExpandedInfo(state: alma, userName: "Alma", color: .pink)
                        }
                    }
                    .padding(.leading, 6)
                }

                DynamicIslandExpandedRegion(.trailing) {
                    VStack(alignment: .trailing, spacing: 4) {
                        if let facu = context.state.facu {
                            UserExpandedTimer(state: facu)
                        }
                        if let alma = context.state.alma {
                            UserExpandedTimer(state: alma)
                        }
                    }
                    .padding(.trailing, 6)
                }

                DynamicIslandExpandedRegion(.bottom) {
                    VStack(spacing: 4) {
                        if let facu = context.state.facu {
                            ProgressView(timerInterval: Date()...facu.endTime, countsDown: true)
                                .tint(.cyan)
                        }
                        if let alma = context.state.alma {
                            ProgressView(timerInterval: Date()...alma.endTime, countsDown: true)
                                .tint(.pink)
                        }
                    }
                    .padding(.horizontal, 8)
                    .padding(.top, 4)
                }
            } compactLeading: {
                // MARK: - COMPACT LEADING
                HStack(spacing: 4) {
                    Image(systemName: "timer").foregroundColor(.orange)
                        .font(.system(size: 12, weight: .bold))
                    
                    VStack(alignment: .leading, spacing: -1) {
                        if context.state.facu != nil {
                            Text("F")
                                .font(.system(size: context.state.alma != nil ? 9 : 12, weight: .black, design: .monospaced))
                                .foregroundColor(.cyan)
                        }
                        if context.state.alma != nil {
                            Text("A")
                                .font(.system(size: context.state.facu != nil ? 9 : 12, weight: .black, design: .monospaced))
                                .foregroundColor(.pink)
                        }
                    }
                }
                .padding(.leading, 4)
            } compactTrailing: {
                // MARK: - COMPACT TRAILING
                VStack(alignment: .trailing, spacing: -1) {
                    if let facu = context.state.facu {
                        Text(timerInterval: Date()...facu.endTime, countsDown: true)
                            .monospacedDigit()
                            .font(.system(size: context.state.alma != nil ? 9 : 13, weight: .bold, design: .rounded))
                            .foregroundColor(.cyan)
                    }
                    if let alma = context.state.alma {
                        Text(timerInterval: Date()...alma.endTime, countsDown: true)
                            .monospacedDigit()
                            .font(.system(size: context.state.facu != nil ? 9 : 13, weight: .bold, design: .rounded))
                            .foregroundColor(.pink)
                    }
                }
                .frame(width: 44, alignment: .trailing)
                .padding(.trailing, 4)
            } minimal: {
                // MARK: - MINIMAL
                Image(systemName: "timer")
                    .font(.system(size: 11, weight: .bold))
                    .foregroundColor(.orange)
            }
        }
    }
}

@available(iOS 16.2, *)
struct UserTimerRow: View {
    let state: RestTimerAttributes.TimerState
    let userName: String
    let color: Color
    
    var body: some View {
        HStack(spacing: 16) {
            ZStack {
                Circle().fill(color.opacity(0.2)).frame(width: 48, height: 48)
                Text(userName.prefix(1).uppercased())
                    .font(.system(size: 24, weight: .heavy, design: .monospaced))
                    .foregroundColor(color)
            }

            VStack(alignment: .leading, spacing: 4) {
                Text(state.exerciseName)
                    .font(.system(size: 16, weight: .bold))
                    .foregroundColor(.white)
                    .lineLimit(1)
                HStack(spacing: 6) {
                    Text(userName.uppercased())
                        .font(.system(size: 11, weight: .heavy, design: .monospaced))
                        .foregroundColor(color)
                    Text("• DESCANSO")
                        .font(.system(size: 11, weight: .semibold))
                        .foregroundColor(.gray)
                }
            }

            Spacer()

            VStack(alignment: .trailing, spacing: 2) {
                Text(timerInterval: Date()...state.endTime, countsDown: true)
                    .monospacedDigit()
                    .font(.system(size: 32, weight: .bold, design: .rounded))
                    .foregroundColor(color)
                
                ProgressView(timerInterval: Date()...state.endTime, countsDown: true)
                    .tint(color)
                    .frame(width: 80)
            }
        }
        .padding(.horizontal, 20)
        .padding(.vertical, 12)
    }
}

@available(iOS 16.2, *)
struct UserExpandedInfo: View {
    let state: RestTimerAttributes.TimerState
    let userName: String
    let color: Color
    
    var body: some View {
        HStack(spacing: 6) {
            Text(userName.prefix(1).uppercased())
                .font(.system(size: 14, weight: .black, design: .monospaced))
                .foregroundColor(color)
            
            VStack(alignment: .leading, spacing: 0) {
                Text(state.exerciseName)
                    .font(.system(size: 12, weight: .bold))
                    .foregroundColor(.white)
                    .lineLimit(1)
            }
        }
    }
}

@available(iOS 16.2, *)
struct UserExpandedTimer: View {
    let state: RestTimerAttributes.TimerState
    
    var body: some View {
        Text(timerInterval: Date()...state.endTime, countsDown: true)
            .monospacedDigit()
            .font(.system(size: 20, weight: .bold, design: .rounded))
            .foregroundColor(.white)
    }
}
