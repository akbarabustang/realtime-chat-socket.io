let app = require('express')();
let port = 3000;
let http = require('http').Server(app);
let io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname +'/index.html');
});

http.listen(port, () => {
  console.log('Connected');
});

io.on('connection', (socket) => {
  console.log('socket connected')

  socket.on('disconnect', () => {
    console.log('disconnected');
  });

  socket.on('send-message', (data) => {
    socket.broadcast.emit('send-message', (data));
    console.log(data)
  });


});

