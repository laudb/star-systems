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

Data.prototype.seedData = function(systems) {

  Data.find({})
    .then(
      (response) => {
        console.log(response)
        if (response.length > 0) {
          console.log('Seed data already inserted')
          return;
        }
        return Data.insertMany(systems)  
    })
    .then((result)=>{

      console.log(`${result} -- ${systems.length} Systems Inserted`);
      return;

    })
    .catch(
    (error) => {
      console.log({'error': error})
    })  
}

module.exports = Data;
