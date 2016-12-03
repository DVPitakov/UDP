var dgram = require('dgram');
var PORT = process.env.PORT || 8081;
var HOST = 'https://projectudp.herokuapp.com/';


server.bind(PORT, HOST);

setTimeout(()=>{
	server.send("hello_1", PORT, HOST);
},2000);

setTimeout(()=>{
	server.send("hello_2", PORT, HOST);
},4000);