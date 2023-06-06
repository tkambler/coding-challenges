const buildCharObject = (str) => {
  const charObj = {};
  for (let char of str.replace(/[^\w]/g).toLowerCase()) {
    charObj[char] = charObj[char] + 1 || 1;
  }
  return charObj;
};

const charObjectsMatch = (obj1, obj2) => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (let char in obj1) {
    if (obj1[char] !== obj2[char]) {
      return false;
    }
  }

  return true;
};

const anagrams = (string1, string2) => {
  const strObj1 = buildCharObject(string1);
  const strObj2 = buildCharObject(string2);

  return charObjectsMatch(strObj1, strObj2);
};

module.exports = {
  anagrams,
};