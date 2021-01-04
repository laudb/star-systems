const sample = require('../models/sample');

async function fetchData() {
  let data = sample;
  console.log({ 'data': data });
  return data;
}

async function getSystem(name) {
  if (name === 'undefined')
    return '-'
  // fetch system via name and return details
  return name;
}

module.exports = { fetchData, getSystem }
