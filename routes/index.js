const express = require('express');
const router = express.Router();

const api = require('../controllers');

// data store
let systems = [];

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

module.exports = router;

