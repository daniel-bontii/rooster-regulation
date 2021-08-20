const assert = require('assert');
const Rooster = require('./index.js');

describe('Rooster', ()=>{
  describe('.announceDawn', ()=>{
    it('returns a rooster call', ()=>{
      const expected = 'cock-a-doodle-doo!';
      const sound = Rooster.announceDawn();

      assert.strictEqual(sound, expected);
    });
  });
  describe('.timeAtDawn', ()=>{
    it('returns its argument as a string', ()=>{
      //const expected = 'string';
      const toCheck = Rooster.timeAtDawn(1);
      assert.strictEqual(toCheck, toCheck.toString());
    });
  });
  describe('.timeAtDawn', ()=>{
    it('throws an error if passed a number less than 0', ()=> {
      assert.throws(
        () => {
          Rooster.timeAtDawn(-5);
        },
        RangeError
      );
    });
  });
  describe('.timeAtDawn', ()=>{
    it('throws an error if passed a number greater than 23', ()=>{
    assert.throws(()=>{
      Rooster.timeAtDawn(25);
    },
    RangeError
    );
    });
  });
});

