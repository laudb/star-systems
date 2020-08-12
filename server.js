// app
var express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');

// server 
const PORT = process.env.PORT || 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// loaders
app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(cookieParser());

// data store
let systems = [];

// routes
app.post('/system', (req, res) => {
    let name = req.body['system-name'];
    if (systems.includes(name)) {
        name = ''
        let error = 'Planetary System already exists.'
        res.render('list', { data: 'Planetary Systems', title: 'Home', systems: systems, err: error })
    }
    if (name.length > 2) {
        systems.push(name);
        res.redirect('/');
    }
});

// numbed out /add route for now with modal active
// app.get('/add', (req, res) => {
//     res.render('add', { data: 'Planetary Systems', title: 'Add' })
// });

app.get('/system/:name', (req, res) => {
    res.render('details', { data: 'Planetary Systems', title: 'Details' });
});

app.get('/', (req, res) => {
    res.render('list', { data: 'Planetary Systems', title: 'Home', systems: systems });
});

// server
app.listen(PORT, () => {
    console.log('Server is running at ', PORT);
});
