var expect = require('chai').expect;
var capitalize = require('../src/server/modules/capitalize');
var string = "this is an example";

describe('capitalize module', function() {

  it('should take in a string or error nicely', function() {
    expect(capitalize(1)).to.throw(TypeError, /expects a string/);
  });

  it('should return the string even when passed an even nubmer', function() {
    expect(capitalize(string)).to.equal('THIS IS AN EXAMPLE');
  });
});
