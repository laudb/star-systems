import systems from './sample.js';

console.log('loading default data');

function seedData() {

  return Data.insertMany(systems)
  .then(function( response) {
    console.log(`${response} -- ${systems.length} Systems Inserted`)
  })
  .catch(function(error){
    console.log(`Error detected `, error)
  })
  
}

export default seedData;
