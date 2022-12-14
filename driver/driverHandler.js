'use strict';
const events = require('../eventPool.js');
const { io } = require('socket.io-client');
const driverSocket = io('http://localhost:3001/CAPS');

const deliverHandler = (payload) => {

  setTimeout(() => {
    console.log(`----New Drop Pick Up----`);
    console.log(`Driver picked up package: ID ${payload.name} ${payload.address} ${payload.id}`);
    
  }, 2500);

  setTimeout(() => {
    console.log(`----New Drop Off----`);
    console.log(`Driver dropped off a package: ID ${payload.name} ${payload.address} ${payload.id}`);
    
  }, 2500);

}

driverSocket.on('PickUp', deliverHandler);

module.exports = {deliverHandler}

