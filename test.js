var dgram = require('dgram');
var PORT = process.env.PORT || 8081;
var HOST = '127.0.0.1' || 'projectudp.herokuapp.com';
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

setTimeout(()=>{
	console.log('sended');
	server.send("hello_1", PORT, HOST);
},2000);

setTimeout(()=>{
	console.log('sended');
	server.send("hello_2", PORT, HOST);
},4000);