// swagger 
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    definition:{
        openapi: '3.0.0',
        info: {
            title: "Swagger API",
            version: "1.0.0",
            description: "RESTful API"
        },
    },
    apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = function (app, express) {

    // --swagger 
    app.get('/swagger.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });

}