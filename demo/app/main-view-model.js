var Observable = require("data/observable").Observable;

function createViewModel() {
    var viewModel = new Observable();
    viewModel.title = "Launchkit";
    viewModel.status = "";
    return viewModel;
}

exports.createViewModel = createViewModel;