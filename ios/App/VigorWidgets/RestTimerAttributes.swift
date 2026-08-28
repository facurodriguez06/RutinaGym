import Foundation
import ActivityKit

public struct RestTimerAttributes: ActivityAttributes {
    public struct TimerState: Codable, Hashable {
        public var endTime: Date
        public var totalSeconds: Double
        public var exerciseName: String
        public var isPaused: Bool
        
        public init(endTime: Date, totalSeconds: Double, exerciseName: String, isPaused: Bool = false) {
            self.endTime = endTime
            self.totalSeconds = totalSeconds
            self.exerciseName = exerciseName
            self.isPaused = isPaused
        }
    }
    
    public struct ContentState: Codable, Hashable {
        public var facu: TimerState?
        public var alma: TimerState?
        
        public init(facu: TimerState? = nil, alma: TimerState? = nil) {
            self.facu = facu
            self.alma = alma
        }
    }
    
    // No static attributes needed since all data changes dynamically per user.
    public init() {}
}
