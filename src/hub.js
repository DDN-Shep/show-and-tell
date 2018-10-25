const http = require('http'),
      socketio = require('socket.io');

const server = http.createServer(),
      io = socketio(server);

let roster = [];

function normaliseName(value) {
  return (value || 'anonymous').toLowerCase();
}

function emitRoster() {
  io.emit('roster', roster);
}
  
io.on('connection', (socket) => {
  console.log('Connection: ', socket.id);

  let user = {
    id: socket.id,
    username: normaliseName()
  }, count = 0;

  roster.push(user);
  
  emitRoster();

  socket.on('identify', (colour, username) => {
    console.log('identify: ', colour, username);
    
    user.colour = colour;
    user.username = normaliseName(username);
    
    emitRoster();
  });

  socket.on('message', (message) => {
    console.log('message: ', message);

    message = String(message || '');

    if (!message) return;

    io.emit('message', {
      id: `${socket.id}-${++count}`,
      colour: user.colour,
      username: user.username,
      message: message
    });
  });

  socket.on('disconnect', () => {
    console.log('Disconnected: ', socket.id);
    
    let ix = roster.findIndex((i) => i.id === socket.id);

    if (ix >= 0) roster.splice(ix, 1);

    emitRoster();
  });
});

server.listen(process.env.PORT || 1337, process.env.IP || '0.0.0.0', () => {
  let addr = server.address();

  console.log(`Chat server listening at ${addr.address} : ${addr.port}`);
});
