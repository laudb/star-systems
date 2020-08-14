// app
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

require('./loaders')(app);
require('./swagger-app')(app, express);

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use(cookieParser());

// routes
app.use(routes);


module.exports = app;