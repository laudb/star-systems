const controller = require('./controller');

module.exports = function (app) {
    app.route('/test')
        .get(controller.home)
    app.route('/add')
        .get(controller.add)
}