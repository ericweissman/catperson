var assert = require('chai').assert;
var Kitty = require('../Kitty.js');
var Catperson = require('../Catperson.js');

describe('Catperson', function() {
  it.skip('should have no cats by default', function() {
    var margie = new Catperson({
      name: 'Margie'
    });
    assert.deepEqual(margie.shortHaired, []);
    assert.deepEqual(margie.mediumHaired, []);
    assert.deepEqual(margie.longHaired, []);
    assert.equal(margie.name, 'Margie');
  });

  it.skip('should be able to sort cats according to their fur', function() {
    var margie = new Catperson({
      name: 'Margie'
    });
    var nigel = new Kitty({
      name: 'Nigel',
      colors: ['white, grey'],
      type: 'short hair'
    });
    var pump = new Kitty({
      name: 'Pumpernickle',
      colors: ['brown', 'black', 'grey'],
      personality: 'mischevious',
      type: 'medium hair'
    });
    var mrPinchos = new Kitty({
      name: 'Mr. Pinchos',
      colors: ['black', 'white', 'brown'],
      type: 'long hair'
    });
    var ladyGrey = new Kitty({
      name: 'Lady Grey',
      colors: ['grey'],
      type: 'long hair'
    });
    var littleKittens = [nigel, pump, mrPinchos, ladyGrey];
    margie.hordeKitties(littleKittens);
    assert.deepEqual(margie.shortHaired[0], nigel);
    assert.deepEqual(margie.mediumHaired[0], pump);
    assert.equal(margie.longHaired.length, 2);
    assert.deepEqual(margie.longHaired[0].name, 'Lady Grey');
  });

});
