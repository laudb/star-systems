const mongoose = require('mongoose');

let dataSchema = new mongoose.Schema(
    {
        id: {
            type: Number
        },
        name: {
            type: String
        },
        properName: {
            type: String
        },
        type: {
            type: String
        },
        distance: {
            type: Number
        },
        mass: {
            type: Number
        },
        radius: {
            type: Number
        },
        teff: {
            type: Number
        },
        source: {
            type: String
        }
    },
    { timestamps: true }
);

const DataModel = mongoose.model('Data', dataSchema);

module.exports = DataModel;