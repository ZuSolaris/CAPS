'use strict';

require('dotenv').config();

const { Server } = require('socket.io');

const PORT = process.env.PORT || 3002;
//--------------------------------------------------------------

const server = new Server(PORT);

//NAMESPACE

const CAPS = server.of('/CAPS');

CAPS.on('connection', (socket) => {
  console.log('The socket has connected to the CAPS', socket.id);

server.on('connection', (socket) => {
  socket.onAny((event, payload) => console.log({event, payload}));
})


server.om


socket.on('PickUp', (payload) => {
  console.log('CAPS', payload);

  CAPS.emit('PickUp', payload);
  
});


});

//CLIENT CONNECTIONS

server.on('connection', (socket) => {
  console.log('Socket connected Events Server!', socket.id);

  socket.on('MESSAGE', (payload) => {
    console.log('SERVER EVENT:', payload);
  });

  socket.on('RECIEVED', (payload) => {
    console.log('Server Recieved Event', payload);
    socket.broadcast.emit('RECIEVED', payload);
  });
});
