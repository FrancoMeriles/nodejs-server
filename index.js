const express = require('express');

const server = express();

const color = require('colors')

server.listen(3000, function() {
    console.log('Server on line'.green)
})

server.get('/', function(req, res) {
    res.send('<h1>Hola mundo con exprees y node </h1>')
})