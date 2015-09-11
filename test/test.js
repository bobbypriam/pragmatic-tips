var expect = require('chai').expect;

var generate = require('../lib/generate');
var TIPS = require('../lib/constants.js').TIPS;

describe('pragmatic-tips', function () {

  describe('generate()', function () {

    it('should return an object containing number, title, and description', function () {
      var tip = generate();

      expect(tip).to.have.property('number');
      expect(tip).to.have.property('title');
      expect(tip).to.have.property('description');
    });

    it('should return one of the tip from TIPS constants', function () {
      var tip = generate();

      expect(TIPS).to.include(tip);
    });

  });

});
