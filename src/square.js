'use strict';

function square() {
  return Number([...arguments].map(a => a * a).join(''));
}

module.exports.square = square;
