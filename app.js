// app
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const routes = require('./routes');
const loaders = require('./loaders');
const swaggerApp = require('./swagger-app');

const app = express();

loaders(app);

swaggerApp(app, express);

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use(cookieParser());

// routes
app.use(routes);


module.exports = app;