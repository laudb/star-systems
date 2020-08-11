const express = require('express');
const app = express();
const logger = require('morgan');

app.use(bodyParser.json())
app.use(logger('dev'));

module.exports = app;