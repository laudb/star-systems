const mongoose = require('mongoose');
const config = require('../util');
console.log({ 'config': config.mongo });

mongoose.connect(config.mongo, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;


db.on('error', (error) => {
    console.log('Database Connection Error', error);
});

db.once('open', () => {
    console.log('Successfully Connected to the Database');
    
});

module.exports = db;

