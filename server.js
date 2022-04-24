var http = require('http');

const io = require('socket.io')(52273);

io.sockets.on('connection', (socket) => {
	socket.join("videos");
	socket.on('streaming', (data) => {
		console.log(data);
		io.sockets.in("videos").emit('streaming', data);
	});
});
/*
server.js
*/
