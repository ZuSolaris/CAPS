'use strict';
const events = require('../eventPool.js');


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

events.on('PickUp', deliverHandler);

module.exports = {deliverHandler}

