'use strict';
const events = require('../../../eventPool.js');
const Chance = require('chance');
const { io } = require('socket.io-client');
const vendorSocket = io('http://localhost:3002/CAPS');

const chance = new Chance();

const generateMessage = () =>{
  let newDelivery = {
    store: '1-206-flowers',
    name: chance.name(),
    address: chance.address(),
    id: chance.guid(),
    
  }
};

generateReciept = () => {
const deliveryAlert = (payload) => {

  console.log(`Driver dropped off a package: ID ${payload.id}`);
  


}
};



//Driver Pick Up
setInterval(() => {
generateMessage();

  
}, 5000);

//Driver Drop Off
setInterval(() => {
  generateReceipt();
  
    
  }, 5000);


events.on('Drop Off', deliveryAlert);

module.exports = { deliveryAlert };
