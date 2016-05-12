var code = require('./main');
var expect = require('chai').expect;

describe("Days Length", function() {
  xit("should only have five days in the array", function() {
    expect(code.fiveDays()).to.equal(5);
  });
});
