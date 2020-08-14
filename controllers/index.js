// data store
let systems = [];

function addSystem(req, res, next) {

    let name = req.body['system-name'];

    if (systems.includes(name)) {
        name = ''
        let error = 'Planetary System already exists.'
        res.render(
            'list',
            {
                data: 'Planetary Systems',
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
    res.render(
        'list',
        {
            data: 'Planetary Systems',
            title: 'Home',
            systems: systems
        }
    );
};

function getSystem(req, res, next) {
    res.render(
        'details',
        {
            data: 'Planetary Systems',
            title: 'Details'
        }
    );
};


module.exports = { listSystems, getSystem, addSystem }