import systems from './sample.js';
import Data from './data.js'

console.log('loading default data');

let anyData = Data.find({});

if (anyData.length === 0) {
  Data.seedData(systems);
}

export default seedData;
