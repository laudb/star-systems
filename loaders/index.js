const path = require('path');
const logger = require('morgan');
const swaggerJSDoc = require('swagger-jsdoc');

// loaders
module.exports = function (app) {

    // view engine setup
    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'pug');

    app.use(logger('dev'));
}

// swagger 
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
    definitions: {},
    responses: {},
    parameters: {},
    securityDefinitions: {}
};

const options = {
    swaggerDefinition: swaggerDefinition,
    apis: ['../routes/*.js'],
};

module.exports.swaggerSpec = swaggerJSDoc(options);
