const express = require('express');

const http = require('http');
const socketio = require('socket.io');


const app = express();
const server = http.createServer(app);
const io = socketio(server);


io.on('connection',(socket)=>{
    console.log(`a user is connected`);

    socket.on('msg_send',(data)=>{
        console.log(data);
        // io.emit is for all the web sockets
        //socket.emit is for that socket
        // brodcast.emit will send message accept the original one
        // io.emit('msg_rcvd',data)if send from one browser it will we send at every browser
        socket.emit('msg_rcvd',data);//only send from one browser other browser will not react
    })

});

app.use('/',express.static(__dirname+'/public'))


server.listen(3000,()=>{
    console.log(`Server started on PORT: ${3000}`);
})