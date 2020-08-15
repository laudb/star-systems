// data store
let systems = ['Sun', 'Proxima Centauri'];
let appName = 'Star Systems'

function addSystem(req, res, next) {

    let name = req.body['system-name'];

    // data store save
    if (systems.includes(name)) {
        name = ''
        let error = 'Star System already exists.'
        res.render(
            'list',
            {
                data: appName,
                title: 'Home',
                systems: systems,
                err: error
            })
    }
    if (name.length > 2) {
        systems.push(name);
        res.redirect('/');
    }
};

function listSystems(req, res, next) {
    // data store fetch all
    res.render(
        'list',
        {
            data: appName,
            title: 'Home',
            systems: systems
        }
    );
};

function getSystem(req, res, next) {

    let system = req.params.name;

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
    // populate about page with data
    res.render(
        'about',
        {
            data: appName,
            title: 'About',
            content: 'Listing of nearby star systems, leveraging the NSC catalogue.'
        }
    )
}


module.exports = { listSystems, getSystem, addSystem, showPage }