const appData = require('../package.json');
const service = require('./service');

let controller = {

    home: (req, res) => {
        let description = {
            name: appData.name,
            description: appData.description,
            version: appData.version
        }
        res.json(description);
    },

    getSystems: (req, res) => {
        res.json(service.list);
    }
};

module.exports = controller;