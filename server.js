// app
var express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');
const routes = require('./routes');

// server 
const PORT = process.env.PORT || 3000;

const app = express();

const swaggerDefinition = {
    info: {
        title: "Swagger API",
        version: "1.0.0",
        description: "RESTful API"
    },
    host: "localhost:3000",
    basePath: "/",
    swagger: "2.0",
    paths: {},
    definitions: {

    },
    responses: {},
    parameters: {},
    securityDefinitions: {}
};

const options = {
    swaggerDefinition: swaggerDefinition,
    apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// loaders
app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(cookieParser());

// routes
app.use('/api-docs', express.static(__dirname + '/api-docs'));
app.use(routes);

// --swagger 
app.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

// server
app.listen(PORT, () => {
    console.log('Server is running at ', PORT);
});
