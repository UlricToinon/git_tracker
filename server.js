var app = require('express')(),
    server = require('http').createServer(app).listen(1337),
    io = require('socket.io').listen(server),
    fs = require('fs');

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket, pseudo) {
    console.log('New client connection.');
    socket.on('coucou', function(pseudo) {
        socket.broadcast.emit('new_client', pseudo);
    });
});
