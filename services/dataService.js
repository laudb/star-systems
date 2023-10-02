const db = require('../models/');

function fetchAllData() {
  return db.fetchAllQuery()
} 

async function getSystem(name) {
  if (name === 'undefined')
    return '-'
  // fetch system via name and return details
  let all_data = db.fetchAllQuery;
  return all_data[0];
}

module.exports = { fetchAllData, getSystem }
