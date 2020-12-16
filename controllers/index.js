const WolframAlphaAPI = require('wolfram-alpha-api');
const config = require('../util');
const wapi = WolframAlphaAPI(config.wolfid);

const dataService = require('../services/dataService');

let appName = 'Star Systems'

let systems = [
    {
        id: 0,
        name: 'Sol',
        properName: 'Sun',
        distance: 0.00,
        planets: 8
    },
    {
        id: 9,
        name: 'Gl 144',
        properName: 'Epsilon Eridani',
        distance: 10.49,
        planets: 1
    },
]

// change to search system
async function addSystem(req, res, next) {

    let data = {
        id: 0,
        name: 'Sol',
        properName: 'Sun',
        type: 'G2V',
        distance: 0.00,
        mass: 1.000,
        radius: '1.00',
        teff: 5778,
    }

    let result = await dataService.createData(data);
    console.log({ '--result--': result });

    // let name = req.body['system-name'];

    // data store save
    // if (systems.includes(name)) {
    //     name = ''
    //     let error = 'Star System already exists.'
    //     res.render(
    //         'list',
    //         {
    //             data: appName,
    //             title: 'Home',
    //             systems: systems,
    //             err: error
    //         })
    // }

    // if (name.length > 2) {
    //     systems.push(name);
    //     res.redirect('/');
    // }

};

async function fetchDetails(req, res, next) {
    let name = req.body.name;
    if (name !== 'undefined') {
        console.log({'name ':name});
            await wapi.getFull({ input: name, output:'json'})
            .then((response) => {

                let results = response.pods;
                let content = results.filter( result=> result['title'] === 'Properties' );
                console.log({'response':content[0].subpods})
                let img = content[0].subpods[0]['img'];
                    img = img['src'];
                let plaintext = content[0].subpods[0]['plaintext'];
                console.log('--------------')
                
                console.log({ img, plaintext})
                
                res.render('detail',
                {
                  systems:'',
                  img,
                  plaintext
                })
            }).catch((error) => {
                res.send(error)
            })
    }
}

async function listSystems(req, res, next) {
    // data store fetch all
    // let systems = await dataService.fetchData()
    // test
 
    console.log({ 'systems0': systems[0] })
    console.log({ 'systems1': systems[1] })
    console.log({ 'systems': systems })
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
    // populate about page with data
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

// receives many systems
// function insertManySystems(req, res, next) {
//     let systems = req.body.data;
//     let length = systems.length;

//     dataService.addBulk(systems);

//     console.log(length, ' systems added');
// }

module.exports = { listSystems, getSystem, fetchDetails, addSystem, showPage }