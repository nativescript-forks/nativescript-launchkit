var Observable = require("data/observable").Observable;

function createViewModel() {
    var viewModel = new Observable();
    viewModel.title = "Launchkit";
    viewModel.status = "";
    viewModel.isSuperUserDebug = false;
    return viewModel;
}

exports.createViewModel = createViewModel;