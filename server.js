// app
var express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
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
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// routes
app.post('/system', (req, res) => {
    console.log({ 'system': req.body.name })
    res.send('Added A New System');
});

app.get('/system', (req, res) => {
    res.render('add', { title: 'Add' });
});

app.get('/system/:name', (req, res) => {
    res.render(`details`, { title: 'Details' });
});

app.get('/', (req, res) => {
    res.render('list', { data: 'Stellar Systems', title: 'Home' });
});

// server
app.listen(PORT, () => {
    console.log('Server is running at ', PORT);
});
