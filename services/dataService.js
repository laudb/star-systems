const DataModel = require('../models/data');

function createData(data) {
  newData = new DataModel(data);
  newData.save();
  return newData;
}

async function fetchData() {
  let data = await DataModel.collection.find();
  console.log({ 'data': data.datas })
  return data.datas
}

async function getSystem(name) {
  if (name === 'undefined')
    return '-'
  // fetch system via name and return details
  return name;
}

async function defaultLoad() {
  return await systems;
}

module.exports = { createData, fetchData, getSystem, defaultLoad }
