var expect = require('chai').expect;
var capitalize = require('../src/server/modules/capitalize');
var string = "this is an example";

describe('capitalize module', function() {

  it('should take error if passed a non-string', function() {
    expect(capitalize).to.throw(TypeError, /expects a string/);
  });

  it('should return the string even when passed an even nubmer', function() {
    expect(capitalize(string)).to.equal('This Is An Example');
  });
});
