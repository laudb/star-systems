const express = require('express');
const router = express.Router();

const api = require('../controllers');

/**
 * @swagger
 * definitions:
 *   System:
 *     name:
 *       type: text
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
 *     depracated: true
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

/**
 * @swagger
 * definitions:
 *   Systems:
 *     properties:
 *       name:
 *         type: string
 * /about:
 *   get:
 *     tags:
 *       - Systems
 *     description: Returns about page data.
 *     produces: 
 *       - application/json
 *     responses:
 *       200:
 *         description: Shows about text
 * 
*/
router.get('/about', api.showPage);

// numbed out /add route for now with modal active
// router.get('/add', (req, res) => {
//     res.render('add', { data: 'Planetary Systems', title: 'Add' })
// });

router.post('/details', api.fetchDetails);

module.exports = router;

