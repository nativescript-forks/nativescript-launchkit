var createViewModel = require("./main-view-model").createViewModel;
var frameModule = require("ui/frame");
var launchkit = require("nativescript-launchkit");

var page;

exports.onNavigatingTo = function (args) {
    page = args.object;
    page.bindingContext = createViewModel();
}

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
        page: page
    }).then(function (args) {
       //Do something 
    }, function (error) {
        
        alert(error);
    });
}

//DONE
exports.onReleaseNotesTap = function (args) {
    launchkit.showReleaseNotes({
        page: page
    }).then(function (args) {
       //Do something
    }, function (error) {
        alert(error);
    });
}

//DONE
exports.onIsSuperUserTap = function (args) {
    viewModel.status = launchkit.isSuperUser({ debug: viewModel.isSuperUserDebug});
}