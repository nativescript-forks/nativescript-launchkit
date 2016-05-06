var createViewModel = require("./main-view-model").createViewModel;
var frameModule = require("ui/frame");
var launchkit = require("nativescript-launchkit");

var page;

exports.onNavigatingTo = function (args) {
    page = args.object;
    page.bindingContext = createViewModel();
}


exports.onTap = function (args) {
    launchkit.showOnboarding().then(function (args) {
       debugger; 
    });
}

exports.onAppReviewTap = function (args) {
    launchkit.showAppReviewCard({
        page: page,
        debug: true
    }).then(function (args) {
       debugger; 
    });
}

exports.onReleaseNotesTap = function (args) {
    launchkit.showReleaseNotes({
        page: page,
        debug: true
    }).then(function (args) {
       debugger; 
    });
}