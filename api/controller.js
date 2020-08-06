const service = require('./service');

let controllers = {
    home: (req, res) => {
        let systems = service.Systems;
        res.json(systems);
    }
}

module.exports = controllers;