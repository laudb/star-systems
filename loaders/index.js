const path = require('path');
const logger = require('morgan');

// loaders
module.exports = function (app, express) {

    // view engine setup
    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'pug');

    app.use(express.urlencoded({ extended: false }));
    app.use(express.static(path.join(__dirname, '../public')));

    app.use(logger('dev'));
}

