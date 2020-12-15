const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const config = require('../util');
const currentEnv = config.currentEnv;
    
// loaders
module.exports = function (app, express) {

    // view engine setup
    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'pug');
    
    // static folder setup
    app.use(express.urlencoded({ extended: false }));
    app.use(express.static(path.join(__dirname, '../public')));

    // bulma
    app.use(express.static(path.join(__dirname, '../node_modules/bulma/css/')));

    // morgan
    app.use(logger('dev'));

    // bodyParser & cookieParser
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(cookieParser());

    return app;

}

