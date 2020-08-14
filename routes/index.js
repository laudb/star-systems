const express = require('express');
const router = express.Router();

const api = require('../controllers');

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
router.post('/system', api.addSystem);


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
router.get('/system/:name', api.getSystem);


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
router.get('/', api.listSystems);


// numbed out /add route for now with modal active
// router.get('/add', (req, res) => {
//     res.render('add', { data: 'Planetary Systems', title: 'Add' })
// });

module.exports = router;

