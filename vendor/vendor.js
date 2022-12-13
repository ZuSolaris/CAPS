'use strict';
const events = require('../eventPool.js');
const Chance = require('chance');

const chance = new Chance();

setInterval(() => {
  let newDelivery = {
    store: '1-206-flowers'
    name: chance.name(),
    address: chance.address(),
id: chance.guid(),


  }

  events.emit('PickUp', newDelivery);
  
  
}, 5000);

const deliveryAlert = (payload) => {

    console.log(`Driver dropped off a package: ID ${payload.id}`);
    


}

events.on('Drop Off', deliveryAlert);
