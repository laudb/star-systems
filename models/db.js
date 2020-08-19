const config = require('../util');
const mongoose = require('mongoose');

mongoose.connect(config.mongo, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose.connection

