// server 
const PORT = require('./util').port;
const server = require('./app');


server.listen(PORT, () => {
    console.log('Server is running at ', PORT);
});
