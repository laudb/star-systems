// app
const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());

require('./loaders')(app, express);
require('./swagger-app')(app, express);

// routes
app.use(routes);


module.exports = app;