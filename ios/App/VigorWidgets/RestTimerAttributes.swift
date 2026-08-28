import Foundation
import ActivityKit

public struct RestTimerAttributes: ActivityAttributes {
    public struct ContentState: Codable, Hashable {
        public var endTime: Date
        public var totalSeconds: Double
        public var isPaused: Bool
        
        public init(endTime: Date, totalSeconds: Double, isPaused: Bool = false) {
            self.endTime = endTime
            self.totalSeconds = totalSeconds
            self.isPaused = isPaused
        }
    }
    
    public var exerciseName: String
    public var userName: String
    
    public init(exerciseName: String, userName: String) {
        self.exerciseName = exerciseName
        self.userName = userName
    }
}
