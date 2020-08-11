const controller = require('./controller');

module.exports = function (app) {
    app.route('/test')
        .get(controller.home)
}