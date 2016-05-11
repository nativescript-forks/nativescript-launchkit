var application = require("application");
var frameModule = require("ui/frame");

var settings = {
    debug: false,
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
    
    if(options.debug)
        settings.debug = options.debug;
    
    if(options.user)
        settings.user = options.user;
    
    LaunchKit.launchWithToken(options.token);
}

exports.instance = function () {
    return LaunchKit.sharedInstance();
}

exports.isSuperUser = function (options) {
    if(options){
        if(settings.debug)
            LaunchKit.sharedInstance().debugAppUserIsAlwaysSuper = settings.debug;
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
            var appWindow = UIApplication.sharedApplication().keyWindow;
            if(appWindow){
            instance.presentOnboardingUIOnWindowCompletionHandler(appWindow, function(args){
                resolve({
                    args: args    
                });
            });
            }else{
                console.log("No active UI window in UIApplication.sharedApplication().keyWindow")
            }
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
            if(settings.debug){
                //This is documented but not live yet?
                instance.debugAlwaysShowAppRatingPrompt = settings.debug;
            }
            
            var controller = options.page.ios;
            instance.presentAppReviewCardIfNeededFromViewControllerCompletion(controller, function (didPresent, flowResult) {
                //Completion
                if(didPresent == 3){
                    reject("AppReviewCard presentation failed due to error: Error Domain=LKUIError Code=404 UserInfo=UI with that name does not exist in your LaunchKit account}")
                }
                
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
            if(settings.debug){
                instance.debugAlwaysPresentAppReleaseNotes = options.debug;
            }
            
            var controller = options.page.ios;
            instance.presentAppReleaseNotesIfNeededFromViewControllerCompletion(controller, function (didPresent) {
                if(didPresent == 3){
                    reject("AppReleaseNotes presentation failed due to error: Error Domain=LKUIError Code=404 UserInfo=UI with that name does not exist in your LaunchKit account}")
                }
                
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