var application = require("application");

//Token Generated from https://launchkit.io/sdk/install/
exports.initalize = function (token) {
    LaunchKit.launchWithToken = token;
}