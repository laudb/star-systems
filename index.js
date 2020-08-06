const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => { res.send('solar systems present'); });

app.listen( PORT, () => { console.log('0 solar systems at', PORT) });
