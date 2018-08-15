const chai = require('chai');
const expect = chai.expect;
const should = chai.should();

const Fk = require('../');

describe('Test API', function() {
  beforeEach(function() {
    this.feik = new Fk();
  });

  it('Expect the feik instance to be an object', function() {
    expect(this.feik).to.be.a('object');
  });

  it('Expect the feik instance has the "name" namespace', function() {
    expect(this.feik.name).to.be.a('object');
  });

  it('Expect the feik instance has the "internet" namespace', function() {
    expect(this.feik.internet).to.be.a('object');
  });

  it('Expect the "name" namespace has the "firstName" method', function () {
    expect(this.feik.name.firstName).to.be.a('function');
  });

  it('Expect the "name" namespace has the "lastName" method', function () {
    expect(this.feik.name.lastName).to.be.a('function');
  });

  it('Expect the "internet" namespace has the "email" method', function () {
    expect(this.feik.internet.email).to.be.a('function');
  });
});
