const app = require('express')();
const http = require('http').createServer(app);
const PORT = process.env.PORT || 3000;
const http = require(http).Server(app);
const io = require('socket.io')(http);

app.get('/',(req, res)=>{
    res.sendFile(__dirname + '/index.html');
});

io.emit('some event', { for: 'everyone' })

io.on('connection',(socket)=>{
    socket.broadcast.emit('hi');
    console.log('a user connected');
    socket.on('chat message',(msg)=>{
        io.emit('chat message' + msg);
    });
});

http.listen(PORT, ()=>{
    console.log(`[+] Starting server on port ${PORT}`);
});
