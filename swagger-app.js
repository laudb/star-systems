// swagger 
const swaggerJSDoc = require('swagger-jsdoc');

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
    apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = function (app, express) {

    app.use('/api-docs', express.static(__dirname + '/api-docs'));

    // --swagger 
    app.get('/swagger.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });

}
