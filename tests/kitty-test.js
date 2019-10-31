var assert = require('chai').assert;
var Kitty = require('../Kitty.js');


describe('Kitty', function() {
  it.skip('should have a name, type, and colors', function() {
    var darkColors = ['brown', 'black', 'grey'];
    var nigel = new Kitty({name: 'Nigel', colors: ['white, grey'], type: 'medium hair'});
    var pump = new Kitty({name: 'Pumpernickle', colors: darkColors, type: 'short hair' });

    assert.equal(nigel.name, 'Nigel');
    assert.equal(pump.name, 'Pumpernickle');
    assert.equal(nigel.type, 'medium hair');
    assert.equal(pump.type, 'short hair');
    assert.deepEqual(nigel.colors, ['white, grey']);
    assert.deepEqual(pump.colors, ['brown', 'black', 'grey']);
  });

  it.skip('should be devious by default, but should be able to have their own personality', function() {
    var nigel = new Kitty({name: 'Nigel', colors: ['white, grey'], type: 'medium hair'});
    var pump = new Kitty({name: 'Pumpernickle', type: 'short hair', colors: ['brown', 'black', 'grey'], personality: 'dastardly'});
    assert.equal(nigel.personality, 'devious');
    assert.equal(pump.personality, 'dastardly');
  });

  it.skip('should be able to eviscerate soft objects', function() {
    var nigel = new Kitty({name: 'Nigel', type: 'medium hair', colors: ['white, grey']});
    var favoriteToys = [
      {name: 'bottlecap', material: 'plastic', status: 'playable'},
      {name: 'stuffed animal', material: 'soft', status: 'playable'},
      {name: 'tennis ball', material: 'soft', status: 'playable'}
    ];
    assert.deepEqual(nigel.destroyedToys, []);
    nigel.playTime(favoriteToys);
    assert.deepEqual(nigel.destroyedToys.length, 2);
    assert.deepEqual(nigel.destroyedToys[0].status, 'destroyed');
    assert.deepEqual(nigel.destroyedToys[0].name, 'stuffed animal');
    assert.equal(nigel.destroyedToys[1].status, 'destroyed');
  });
})
