'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _constants = require('./constants');

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 */
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generate() {
  var index = getRandomInteger(0, _constants.TIPS.length - 1);

  var tip = _constants.TIPS[index];
  tip.number = index + 1;

  return tip;
}

exports['default'] = generate;
module.exports = exports['default'];