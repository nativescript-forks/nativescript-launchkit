var createViewModel = require("./main-view-model").createViewModel;
var frameModule = require("ui/frame");
var launchkit = require("nativescript-launchkit");

var page;

exports.onNavigatingTo = function (args) {
    page = args.object;
    page.bindingContext = createViewModel();
}

//TODO: Partially Working
exports.onOnboardingTap = function (args) {
    launchkit.showOnboarding().then(function (args) {
       viewModel.status = JSON.stringify(args);
    }, function (error) {
        viewModel.status = JSON.stringify(error);
    });
}

//TODO: Not working
exports.onAppReviewTap = function (args) {
    launchkit.showAppReviewCard({
        page: page,
        debug: true
    }).then(function (args) {
       viewModel.status = JSON.stringify(args); 
    }, function (error) {
        viewModel.status = JSON.stringify(error);
    });
}

//ALL GOOD
exports.onReleaseNotesTap = function (args) {
    launchkit.showReleaseNotes({
        page: page,
        debug: true
    }).then(function (args) {
       viewModel.status = JSON.stringify(args);
    }, function (error) {
        viewModel.status = JSON.stringify(error);
    });
}

