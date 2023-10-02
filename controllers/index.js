// const WolframAlphaAPI = require('wolfram-alpha-api');
const config = require('../util');
// const wapi = WolframAlphaAPI(config.wolfid);

const dataService = require('../services/dataService');

let appName = 'Star Systems'

async function fetchDetails(req, res, next) {
  let name = req.body.name;
  if (name !== 'undefined') {
    console.log({ 'name ': name });
    // await wapi.getFull({ input: name, output: 'json' })
    //   .then((response) => {

    //     let results = response.pods;
    //     let content = results.filter(result => result['title'] === 'Properties');
    //     let img = content[0].subpods[0]['img'];
    //     img = img['src'];
    //     let plaintext = content[0].subpods[0]['plaintext'];

    //     res.send(
    //       {
    //         img,
    //         plaintext
    //       })
    //   }).catch((error) => {
    //     res.send(error)
    //   })
  }
}

async function listSystems(req, res, next) {
  // data store fetch all
  let systems = await dataService.fetchData()
  res.render(
    'list',
    {
      data: appName,
      title: 'Home',
      systems: systems
    }
  );
};

async function getSystem(req, res, next) {

  let systemName = req.params.name;
  let system = await dataService.getSystem(systemName);

  // data store fetch one
  res.render(
    'details',
    {
      data: appName,
      title: 'Details',
      system: system
    }
  );
};

function showPage(req, res, next) {
  let stats = ['10 parsecs', '270+ stars']
  // populate about page with data - tbc
  res.render(
    'about',
    {
      data: appName,
      title: 'About',
      content: 'A listing of nearby star systems leveraging the Nearby Stars Catalogue.',
      stats: stats
    }
  )
}

module.exports = { listSystems, getSystem, fetchDetails, showPage }
