const path = require('path');
const logger = require('morgan');

// loaders
module.exports = function (app) {

    // view engine setup
    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'pug');

    app.use(logger('dev'));
}

