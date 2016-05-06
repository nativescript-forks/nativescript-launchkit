var createViewModel = require("./main-view-model").createViewModel;


exports.onNavigatingTo = function (args) {
    var page = args.object;
    page.bindingContext = createViewModel();
}


exports.onTap = function (args) {
    
}