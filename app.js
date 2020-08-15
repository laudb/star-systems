// app
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

app.use(express.json());

require('./loaders')(app, express);
require('./swagger-app')(app, express);


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser());

// routes
app.use(routes);


module.exports = app;