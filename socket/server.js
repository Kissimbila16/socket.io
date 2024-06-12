var express = require("express");
var app = express();
var server = require("http").createServer(app);
const io = require("socket.io")(server);

app.use(express.static('public'));

io.on('connect', (socket) => {
    socket.on('msg', (msg) => {
        socket.emit('msg',msg)
        console.log(socket.id)
        console.log(msg)
    })

})



server.listen('3000', () => {
    console.log('servidor rodando')
})