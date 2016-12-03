var dgram = require('dgram');
var PORT = process.env.PORT || 8081;
var HOST = '127.0.0.1';
var buf = [null, null];

var server = dgram.createSocket('udp4');
server.on('listening', function () {
    var address = server.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
});
server.on('message', function (message, remote) {
    console.log(remote.address + ':' + remote.port +' - ' + message);
    if (buf[0] != null && buf[1] != null) {
    }
    else if (buf[0] == null) {
	console.log('buf[0] == 0');
	buf[0] = {port: remote.port, adress: remote.address};
    }
    else {
        console.log('buf[1] == 0');
        buf[1] = {port: remote.port, adress: remote.address};
	server.send(JSON.stringify(buf[0]), buf[1].port, buf[1].adress);
	server.send(JSON.stringify(buf[1]), buf[0].port, buf[0].adress)
    }
    
});