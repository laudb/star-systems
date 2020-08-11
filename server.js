const express = require('express');
const app = express();
const logger = require('morgan');
const path = require('path');

const PORT = process.env.PORT || 3000;

const apiRoutes = require('./api/routes');
const appRoutes = require('./app/routes')

app.use(logger('dev'));

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "pug")

apiRoutes(app);
appRoutes(app);

app.listen(PORT, () => { console.log('0 solar systems at', PORT) });
