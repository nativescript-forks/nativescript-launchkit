var application = require("application");

var settings = {
    token: ""
}

//Token Generated from https://launchkit.io/sdk/install/
exports.initalize = function (token) {
    settings.token = token;
    LaunchKit.launchWithToken(token);
}

exports.showOnboarding = function () {
    return new Promise(function(resolve, reject) {
        var instance = LaunchKit.sharedInstance();
        
        if(instance){
            var myWindow = new UIWindow();
            myWindow.makeKeyAndVisible();
            
            instance.presentOnboardingUIOnWindowCompletionHandler(myWindow, function(args){
                resolve({
                    window: myWindow,
                    args: args    
                });
            });
        }else{
            console.log("Please call initalize first");
            reject("Please call initalize first");
        }
    });
}