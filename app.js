// app
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const routes = require('./routes');
const loaders = require('./loaders');

const app = express();

loaders(app);

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use(cookieParser());

// routes
app.use(routes);
app.use('/api-docs', express.static(__dirname + '/api-docs'));


// --swagger 
app.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    let swaggerSpec = { loaders }
    res.send(swaggerSpec);
});

module.exports = app;