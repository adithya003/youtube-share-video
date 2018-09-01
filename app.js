const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.get('/',(req,res)=>{
	res.sendFile(__dirname+'/views/index.html');	
})

//THis is a comment
io.on('connection',function(socket){
	socket.on('sendMsg',function(msg){
		console.log('Message from server',msg)
		io.emit('sendMsg',msg);
	});
});


http.listen(3000,function(){
	console.log('Application Launched')
});
