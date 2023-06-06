const assert = require('assert');
const { anagrams } = require('./index');

describe('anagrams', () => {
  it('should return true when the provided strings are anagrams', () => {
    assert(anagrams('night', 'thing') === true);
    assert(anagrams('peach', 'cheap') === true);
    assert(anagrams('NIGHT', 'thing') === true);
    assert(anagrams('PEACH', 'cheap') === true);
  });

  it('should return false when the provided strings are not anagrams', () => {
    assert(anagrams('foo', 'bar') === false);
  });
});
