var socket = io();

let btn = document.getElementById('btn');
btn.onclick = function exec(){
    socket.emit('From_client')
}
socket.on('From_Server',()=>{
    console.log("Collected a new event from server");
    const div = document.createElement('div');
    div.innerText = 'New event from server';
    document.body.appendChild(div);
})