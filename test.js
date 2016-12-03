var dgram = require('dgram');
var PORT = 443;
var HOST = '54.197.246.21';
var server = dgram.createSocket('udp4');

server.on('listening', function () {
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
});
console.log('hello');

server.on('message', function (message, remote) {
    console.log(remote.address + ':' + remote.port +' - ' + message);
});
server.bind(3000, '127.0.0.1');
