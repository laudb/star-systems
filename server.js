// app
var express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');

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
    apis: ['./*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

// server 

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

app.use('/api-docs', express.static(__dirname + '/api-docs'));

// data store
let systems = [];

// routes

// --swagger 
app.get('/swagger.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

// --app
/**
 * @swagger
 * definitions:
 *   System:
 *     name:
 *       type: string
 * /system:
 *  post:
 *     tags:
 *       - Systems
 *     description: Adds a new system
 *     parameters:
 *       - in: body
 *         name: system-name
 *         schema:
 *           $ref: '#/definitions/System'
 *     produces:
 *       - application/json
 *     responses:
 *       201:
 *         description: System created
 *         schema:
 *           $ref: '#/definitions/System'
 *
*/
app.post('/system', (req, res) => {
    let name = req.body['system-name'];
    if (systems.includes(name)) {
        name = ''
        let error = 'Planetary System already exists.'
        res.render('list', { data: 'Planetary Systems', title: 'Home', systems: systems, err: error })
    }
    if (name.length > 2) {
        systems.push(name);
        res.redirect('/');
    }
});

/**
 * @swagger
 * definitions:
 *   System:
 *     name:
 *       type: object
 * /system/{name}:
 *   get:
 *     tags:
 *       - SystemDetail   
 *     description: Returns a System by the name
 *     parameters:
 *       - in: path
 *         name: name
 *     produces: 
 *       - application/json
 *     responses:
 *       200:
 *         description: System details
 *         schema: 
 *           $ref: '#/definitions/System'
 * 
*/
app.get('/system/:name', (req, res) => {
    res.render('details', { data: 'Planetary Systems', title: 'Details' });
});


/**
 * @swagger
 * definitions:
 *   Systems:
 *     properties:
 *       name:
 *         type: array
 * /:
 *   get:
 *     tags:
 *       - Systems
 *     description: Returns all Systems by names
 *     produces: 
 *       - application/json
 *     responses:
 *       200:
 *         description: List of System names
 *         schema: 
 *           $ref: '#/definitions/Systems'
 * 
*/
app.get('/', (req, res) => {
    res.render('list', { data: 'Planetary Systems', title: 'Home', systems: systems });
});

// numbed out /add route for now with modal active
// app.get('/add', (req, res) => {
//     res.render('add', { data: 'Planetary Systems', title: 'Add' })
// });

// server
app.listen(PORT, () => {
    console.log('Server is running at ', PORT);
});
