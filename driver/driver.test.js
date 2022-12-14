'use strict';

const { deliverHandler } = require('./driver/driverHandler.js')
const events = require('../eventPool.js');

jest.mock('../eventPool.js', () => {
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
    expect(events.emit).toHaveBeenCalledWith('PickUp', deliverHandler)
  });
});
