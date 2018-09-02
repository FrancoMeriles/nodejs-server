const http = require('http');

const color = require('colors')

const handleServer = function(req, res) {
    res.writeHead(200);
    res.write('<h1>Hola Mundo Dos</h1>');
    res.end();
}

const server = http.createServer(handleServer);

server.listen(3000, function() {
    console.log('Server on line'.green)
})