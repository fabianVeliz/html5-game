const { expect } = require('chai');

const Fk = require('../');

describe('Test API', function() {
  it('Feik instance should be an object', function() {
    const feik = new Fk();
    expect(feik).to.be.a('object');
  });
});
