const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');

// loaders
module.exports = function (app, express) {

    // view engine setup
    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'pug');

    // static folder setup
    app.use(express.urlencoded({ extended: false }));
    app.use(express.static(path.join(__dirname, '../public')));

    // morgan
    app.use(logger('dev'));

    // bodyParser & cookieParser
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(cookieParser());

}

