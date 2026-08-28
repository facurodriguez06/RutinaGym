import Foundation
import Capacitor
import ActivityKit

@objc(LiveActivityPlugin)
public class LiveActivityPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "LiveActivityPlugin"
    public let jsName = "LiveActivity"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "startRestTimer", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "endRestTimer", returnType: CAPPluginReturnPromise)
    ]
    
    private var currentActivity: Any? = nil

    @objc public func startRestTimer(_ call: CAPPluginCall) {
        guard let exerciseName = call.getString("exerciseName"),
              let seconds = call.getDouble("seconds") else {
            call.reject("Missing required parameters: exerciseName and seconds")
            return
        }
        
        let userName = call.getString("userName") ?? "Facu"
        
        if #available(iOS 16.1, *) {
            guard ActivityAuthorizationInfo().areActivitiesEnabled else {
                call.reject("Live Activities are not enabled on this device")
                return
            }
            
            // End any existing activities first
            Task {
                for activity in Activity<RestTimerAttributes>.activities {
                    await activity.end(dismissalPolicy: .immediate)
                }
                
                let attributes = RestTimerAttributes(exerciseName: exerciseName, userName: userName)
                let endTime = Date().addingTimeInterval(seconds)
                let contentState = RestTimerAttributes.ContentState(endTime: endTime, totalSeconds: seconds)
                
                do {
                    let activity = try Activity<RestTimerAttributes>.request(
                        attributes: attributes,
                        contentState: contentState,
                        pushType: nil
                    )
                    self.currentActivity = activity
                    call.resolve(["id": activity.id])
                } catch {
                    call.reject("Failed to start Live Activity: \(error.localizedDescription)")
                }
            }
        } else {
            call.reject("Live Activities require iOS 16.1 or later")
        }
    }

    @objc public func endRestTimer(_ call: CAPPluginCall) {
        if #available(iOS 16.1, *) {
            Task {
                for activity in Activity<RestTimerAttributes>.activities {
                    await activity.end(dismissalPolicy: .immediate)
                }
                self.currentActivity = nil
                call.resolve(["success": true])
            }
        } else {
            call.resolve(["success": true])
        }
    }
}
