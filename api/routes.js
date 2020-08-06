const controller = require('./controller');

module.exports = function (app) {
    app.route('/')
        .get(controller.home);
};