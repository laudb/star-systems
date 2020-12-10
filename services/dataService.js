const DataModel = require('../models/data');

function createData(data) {
    newData = new DataModel(data);
    newData.save();
    return newData;
}

async function fetchData() {
    // console.log({ 'data': DataModel.collection.find({}) })
    return await DataModel.collection.find();
}

async function getSystem(name) {
    if (name === 'undefined')
      return '-'
    // fetch system via name and return details
    return name;
}
async function addBulk(data) {

}




module.exports = { createData, fetchData, addBulk, getSystem }