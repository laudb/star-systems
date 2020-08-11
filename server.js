const express = require('express');
const app = express();
const logger = require('morgan');
const path = require('path');
app.use(logger('dev'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => { console.log('0 solar systems at', PORT) });
