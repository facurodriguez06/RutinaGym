#import <Capacitor/Capacitor.h>

CAP_PLUGIN(LiveActivityPlugin, "LiveActivity",
    CAP_PLUGIN_METHOD(startRestTimer, CAPPluginReturnPromise);
    CAP_PLUGIN_METHOD(endRestTimer, CAPPluginReturnPromise);
)
