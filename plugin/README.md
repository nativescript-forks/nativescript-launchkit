# Nativescript LaunchKitSDK

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
                //Where this is your token from https://launchkit.io/sdk/install/
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

[isSuperUser](https://launchkit.io/sdk/super-users/)
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

[showOnboarding](https://launchkit.io/sdk/onboarding/): Returns Promise
``` js
launchkit.showOnboarding();
```

[showAppReviewCard](https://launchkit.io/sdk/rating-prompt/): Returns Promise
``` js
launchkit.showAppReviewCard({
    page: page, //UIViewController from your pages nav
    debug: true //When true always shows the card
});
```