import Data from './data.js'

console.log('loading default data');

// let anyData = Data.find({});

// if (anyData.length === 0) {
//   Data.seedData(systems);
// }

let systems = [
  {
    id: 0,
    name: "Sol",
    properName: "Sun",
    distance: 0.00,
    planets: 8
  },
  {
    id: 1,
    name: "Gl 551",
    properName: "Proxima Centauri",
    distance: 4.22,
    planets: ''
  },
  {
    id: 2,
    name: "Gl 699",
    properName: "Barnard's Star",
    distance: 5.94,
    planets: ''
  },
  {
    id: 3,
    name: "Gl 406",
    properName: "Wolf 359",
    distance: 7.79,
    planets: ''
  }
]                               

export default systems;
