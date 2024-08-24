const express = require('express');

const http = require('http');
const socketio = require('socket.io');


const app = express();
const server = http.createServer(app);
const io = socketio(server);


io.on('connection',(socket)=>{
    console.log(`a user is connected`);

    socket.on('From_client',()=>{
        console.log("Event from coming from client")
    })

    setInterval(()=>{
        socket.emit('From_Server')
    },2000)
});

app.use('/',express.static(__dirname+'/public'))


server.listen(3000,()=>{
    console.log(`Server started on PORT: ${3000}`);
})