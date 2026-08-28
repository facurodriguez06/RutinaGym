import UIKit
import Capacitor

class MyViewController: CAPBridgeViewController {
    override open func capacitorDidLoad() {
        super.capacitorDidLoad()
        
        // Manually register local plugins in Capacitor 8
        self.bridge?.registerPluginInstance(LiveActivityPlugin())
    }
}
