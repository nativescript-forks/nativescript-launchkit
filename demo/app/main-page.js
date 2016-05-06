var createViewModel = require("./main-view-model").createViewModel;
var frameModule = require("ui/frame");
var launchkit = require("nativescript-launchkit");

exports.onNavigatingTo = function (args) {
    var page = args.object;
    page.bindingContext = createViewModel();
}


exports.onTap = function (args) {
    launchkit.showOnboarding().then(function (args) {
       debugger; 
    });
}