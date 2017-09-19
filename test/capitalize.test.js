var expect = require('chai').expect;
var capitalize = require('../src/server/modules/capitalize');

describe('capitalize module', function() {

  it('should capitalize a string passed in', function() {
    expect(capitalize).to.return(TypeError, /expects a number/);
  });

  it('should return the string even when passed an even nubmer', function() {
    expect(oddEven(4)).to.equal('even');
  });
});
