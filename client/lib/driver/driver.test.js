'use strict';

const { deliverHandler } = require('./driver/driverHandler.js.js.js.js.js.js.js.js')
const { io } = require('socket.io-client');
const socket = io('http://localhost:3001/caps');


jest.mock(socket, () => {
  return {
    on: jest.fn(),
    emit: jest.fn(),
  };
});
console.log = jest.fn();

describe('Driver', () => {
  
  it('Driver Functions Work', () => {
    const payload = {
      store: '1-206-flowers',
      name: 'Zoe',
      address: 'Home',
      id: '1337'
    };
    deliverHandler(payload);
    expect(console.log).toHaveBeenCalledWith(`Driver picked up package: ID ${payload.name} ${payload.address} ${payload.id}`);
    expect(socket.emit).toHaveBeenCalledWith('PickUp', deliverHandler)
  });
});
