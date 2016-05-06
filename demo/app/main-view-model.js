var Observable = require("data/observable").Observable;

function createViewModel() {
    var viewModel = new Observable();
    viewModel.title = "Launchkit";

    return viewModel;
}

exports.createViewModel = createViewModel;