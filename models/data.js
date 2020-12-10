const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let dataSchema = new Schema({
    id: { type: Number },
    name: { type: String },
    properName: { type: String },
    type: { type: String },
    distance: { type: Number },
    mass: { type: Number },
    radius: { type: Number },
    teff: { type: Number },
    source: { type: String }
}, { timestamps: true }
);

let Data = mongoose.model('Data', dataSchema);

module.exports = Data;