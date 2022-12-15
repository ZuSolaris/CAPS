'use strict';

const { deliveryAlert } = require('./vendor.js')
const eventPool = require('../eventPool');

jest.mock('../eventPool.js', () => {
return {
  on: jest.fn(),
emit: jest.fn(),
};
});
console.log = jest.fn();

describe('Vendor', () => {
it('Pick Up Function and Reply Works!', () => {
  const payload = {
    store: '1-206-flowers',
    name: 'Zoe',
    address: 'Home',
    id: '1337'
  };
  deliveryAlert(payload);
  expect(console.log).toHaveBeenCalledWith(`Driver dropped off a package: ID ${payload.id}`);
  expect(events.emit).toHaveBeenCalledWith('PickUp', Payload)
});

});
