const express = require('express');
const app = express();
const logger = require('morgan');

const PORT = process.env.PORT || 3000;

const routes = require('./api/routes');
app.use(logger('dev'));
routes(app);

app.listen(PORT, () => { console.log('0 solar systems at', PORT) });
