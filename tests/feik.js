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

  it('Expect the feik instance has the "date" namespace', function() {
    expect(this.feik.date).to.be.a('object');
  });

  it('Expect the feik instance has the "address" namespace', function() {
    expect(this.feik.address).to.be.a('object');
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

  it('Expect the "date" namespace has the "day" method', function () {
    expect(this.feik.date.day).to.be.a('function');
  });

  it('Expect the "date" namespace has the "month" method', function () {
    expect(this.feik.date.month).to.be.a('function');
  });

  it('Expect the "address" namespace has the "country" method', function () {
    expect(this.feik.address.country).to.be.a('function');
  });
});
