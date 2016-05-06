var application = require("application");
var launchkit = require("nativescript-launchkit");
var frameModule = require("ui/frame");

if (application.ios) {
    var __extends = this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        __.prototype = b.prototype;
        d.prototype = new __();
    };
    
    var appDelegate = (function (_super) {
        __extends(appDelegate, _super);
        function appDelegate() {
            _super.apply(this, arguments);
        }
        
        appDelegate.prototype.applicationDidFinishLaunchingWithOptions = function (application, launchOptions) {
            debugger;
            LaunchKit.launchWithToken("OjMwhQZ5WgFFNZAQVBOYtWtAcXv1Kw2inxkzPEx_j6sK");
            
            var window = null;
            var instance = LaunchKit.alloc().init(); 
            instance.presentOnboardingUIOnWindowCompletionHandler(window, function(args){
                debugger;
            })
        };
        
        appDelegate.ObjCProtocols = [UIApplicationDelegate];
        return appDelegate;
    })(UIResponder);
    application.ios.delegate = appDelegate;
}

application.start({ moduleName: "main-page" });
