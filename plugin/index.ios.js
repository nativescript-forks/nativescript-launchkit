var application = require("application");
var frameModule = require("ui/frame");

var settings = {
    token: "",
    user: {
        id: "",
        name: "",
        email: ""
    }
}

//Token Generated from https://launchkit.io/sdk/install/
exports.initalize = function (options) {
    settings.token = options.token;
    
    if(options.user){
        settings.user = options.user;
    }
    
    LaunchKit.launchWithToken(options.token);
}

exports.instance = function () {
    return LaunchKit.sharedInstance();
}

exports.isSuperUser = function (options) {
    if(options){
        if(options.debug)
            LaunchKit.sharedInstance().debugAppUserIsAlwaysSuper = options.debug;
    }
        
    return LKAppUserIsSuper();
}

exports.setUser = function (user) {
    settings.user = user;
    
    LaunchKit.sharedInstance().setUserIdentifierEmailName(user.id, user.email, user.name);
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

exports.showAppReviewCard = function (options) {
    return new Promise(function(resolve, reject) {
        var instance = LaunchKit.sharedInstance();
        
        if(instance){
            if(options){
                if(options.debug){
                    //This is documented but not live yet?
                    instance.debugAlwaysShowAppRatingPrompt = options.debug;
                }
            }
            
            var controller = options.page.ios;
            instance.presentAppReviewCardIfNeededFromViewControllerCompletion(controller, function (didPresent, flowResult) {
                //Completion
                resolve(
                    {
                        didPresent: didPresent,
                        flowResult: flowResult
                    }
                )
            })
        }else{
            console.log("Please call initalize first");
            reject("Please call initalize first");
        }
    });
}


exports.showReleaseNotes = function (options) {
    return new Promise(function(resolve, reject) {
        var instance = LaunchKit.sharedInstance();
        
        if(instance){
            if(options){
                if(options.debug){
                    instance.debugAlwaysPresentAppReleaseNotes = options.debug;
                }
            }
            
            var controller = options.page.ios;
            instance.presentAppReleaseNotesIfNeededFromViewControllerCompletion(controller, function (didPresent) {
                //Completion
                resolve(
                    {
                        didPresent: didPresent
                    }
                )
            })
        }else{
            console.log("Please call initalize first");
            reject("Please call initalize first");
        }
    });
}