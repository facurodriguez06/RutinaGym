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
              !exerciseName.isEmpty else {
            call.reject("Missing required parameter: exerciseName")
            return
        }

        guard let seconds = call.getDouble("seconds"),
              seconds > 0 else {
            call.reject("Missing required parameter: seconds (must be > 0)")
            return
        }

        let userName = call.getString("userName") ?? "Facu"

        if #available(iOS 16.2, *) {
            guard ActivityAuthorizationInfo().areActivitiesEnabled else {
                call.resolve([
                    "success": false,
                    "message": "Live Activities are not enabled on this device. Go to Settings > Vigor > Live Activities."
                ])
                return
            }

            Task { @MainActor in
                // End any existing activities first
                for activity in Activity<RestTimerAttributes>.activities {
                    await activity.end(nil, dismissalPolicy: .immediate)
                }

                let attributes = RestTimerAttributes(exerciseName: exerciseName, userName: userName)
                let endTime = Date().addingTimeInterval(seconds)
                let contentState = RestTimerAttributes.ContentState(endTime: endTime, totalSeconds: seconds)

                do {
                    let content = ActivityContent(state: contentState, staleDate: endTime)
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
        } else {
            call.resolve([
                "success": false,
                "message": "Live Activities require iOS 16.2 or later"
            ])
        }
    }

    @objc public func endRestTimer(_ call: CAPPluginCall) {
        if #available(iOS 16.2, *) {
            Task { @MainActor in
                for activity in Activity<RestTimerAttributes>.activities {
                    await activity.end(nil, dismissalPolicy: .immediate)
                }
                self.currentActivity = nil
                call.resolve(["success": true])
            }
        } else {
            call.resolve(["success": true])
        }
    }
}
