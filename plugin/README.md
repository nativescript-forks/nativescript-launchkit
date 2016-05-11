# Nativescript LaunchKitSDK

[Live Demo](https://appetize.io/embed/cdakjetad96u126kdaaw89q4nw?device=iphone6s&scale=75&orientation=portrait&osVersion=9.3)

![Preview](https://github.com/sitefinitysteve/nativescript-launchkit/raw/master/sample.gif)

## Setup

Add this in your app.js
``` js
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
        
        appDelegate.prototype.applicationDidFinishLaunchingWithOptions = function (app, launchOptions) {
            launchkit.initalize({
                token: "OjMwhQZ5WgFFNZAQVBOYtWtAcXv1Kw2inxkzPEx_j6sK" 
            });
        };
        
        appDelegate.ObjCProtocols = [UIApplicationDelegate];
        return appDelegate;
    })(UIResponder);
    application.ios.delegate = appDelegate;
}
```

## API
``` js
var launchkit = require("nativescript-launchkit");
```

``` js
launchkit.initalize({
    token: "",  //From https://launchkit.io/sdk/install/,
    debug: false //tells all methods that have debug flags to use them
});
```

[isSuperUser](https://launchkit.io/sdk/super-users/): Returns bool
``` js
launchkit.isSuperUser();
```

[setUser](https://launchkit.io/sdk/super-users/)
``` js
launchkit.setUser({
    id: "someid",
    name: "steve",
    email: "steve@launchkitsdk.com"
});
```

[showOnboarding](https://launchkit.io/sdk/onboarding/): Returns Promise (args: args)
``` js
launchkit.showOnboarding();
```
> Onboarding needs to be called from a view, will fail in app.js due to there being no UIWindow yet 


[showReleaseNotes](https://launchkit.io/sdk/release-notes/): Returns Promise (args: didPresent) 
``` js
launchkit.showAppReviewCard({
    page: page, //UIViewController from your pages nav
});
```


[showAppReviewCard](https://launchkit.io/sdk/rating-prompt/): Returns Promise (args: didPresent, flowResult)
``` js
launchkit.showAppReviewCard({
    page: page, //UIViewController from your pages nav
});
```