const http = require('http');
const express = require('express');
const socket = require('socket.io');

//init
const app = express();
const server = http.createServer(app);
const io = socket.listen(server);

//settings
app.use(express.static(__dirname + '/public'));

//server listening
server.listen(3000, function() {
    console.log('server listening on port: ', 3000);
} );