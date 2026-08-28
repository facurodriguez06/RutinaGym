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
        let exerciseName = call.getString("exerciseName", "")
        guard !exerciseName.isEmpty else {
            call.resolve([
                "success": false,
                "message": "Missing required parameter: exerciseName"
            ])
            return
        }

        let seconds = call.getDouble("seconds", -1)
        guard seconds > 0 else {
            call.resolve([
                "success": false,
                "message": "Missing required parameter: seconds (must be > 0)"
            ])
            return
        }

        let userName = call.getString("userName", "Facu")

        if #available(iOS 16.2, *) {
            guard ActivityAuthorizationInfo().areActivitiesEnabled else {
                call.resolve([
                    "success": false,
                    "message": "Live Activities are not enabled on this device"
                ])
                return
            }

            Task {
                let newTimer = RestTimerAttributes.TimerState(
                    endTime: Date().addingTimeInterval(seconds),
                    totalSeconds: seconds,
                    exerciseName: exerciseName
                )
                
                if let activity = Activity<RestTimerAttributes>.activities.first {
                    // Update existing activity
                    var contentState = activity.content.state
                    if userName.lowercased() == "facu" {
                        contentState.facu = newTimer
                    } else {
                        contentState.alma = newTimer
                    }
                    
                    let content = ActivityContent(state: contentState, staleDate: nil)
                    await activity.update(content)
                    call.resolve(["id": activity.id, "success": true])
                } else {
                    // Create new activity
                    var contentState = RestTimerAttributes.ContentState(facu: nil, alma: nil)
                    if userName.lowercased() == "facu" {
                        contentState.facu = newTimer
                    } else {
                        contentState.alma = newTimer
                    }
                    
                    let attributes = RestTimerAttributes()
                    do {
                        let content = ActivityContent(state: contentState, staleDate: nil)
                        let activity = try Activity<RestTimerAttributes>.request(
                            attributes: attributes,
                            content: content,
                            pushType: nil
                        )
                        self.currentActivity = activity
                        call.resolve(["id": activity.id, "success": true])
                    } catch {
                        call.resolve([
                            "success": false,
                            "message": "Failed to start Live Activity: \(error.localizedDescription)"
                        ])
                    }
                }
            }
        } else {
            call.resolve([
                "success": false,
                "message": "Live Activities require iOS 16.2 or later"
            ])
        }
    }

    @objc public func endRestTimer(_ call: CAPPluginCall) {
        let userName = call.getString("userName", "")
        if #available(iOS 16.2, *) {
            Task {
                if let activity = Activity<RestTimerAttributes>.activities.first {
                    var contentState = activity.content.state
                    
                    if userName.lowercased() == "facu" {
                        contentState.facu = nil
                    } else if userName.lowercased() == "alma" {
                        contentState.alma = nil
                    } else {
                        // Kill both if no specific user provided or unknown user
                        contentState.facu = nil
                        contentState.alma = nil
                    }
                    
                    if contentState.facu == nil && contentState.alma == nil {
                        await activity.end(nil, dismissalPolicy: .immediate)
                        self.currentActivity = nil
                    } else {
                        let content = ActivityContent(state: contentState, staleDate: nil)
                        await activity.update(content)
                    }
                }
                call.resolve(["success": true])
            }
        } else {
            call.resolve(["success": true])
        }
    }
}
