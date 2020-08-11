// app
var express = require('express');
const app = express();

// server 
const PORT = process.env.PORT || 3000;

// loaders

// routes

app.post('/system', (req, res) => {
    res.send('Add A New System')
});

app.get('/system/:name', (req, res) => {
    res.send('This is a system and its details')
});

app.get('/', (req, res) => {
    res.send('Solar Systems Home Page')
});

// server
app.listen(PORT, () => {
    console.log('Server is running at ', PORT);
});