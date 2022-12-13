'use strict';

const events = require('./eventPool');

const driver = require('./driver/driverHandler');

const vendor = require('./vendor/vendor');

events.on('PickUp', (Delivery) => console.log('This is a pickup event:', Delivery.name, Delivery.address, Delivery.id))




