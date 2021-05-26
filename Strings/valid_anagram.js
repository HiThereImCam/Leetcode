/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let charObj = {};

  for (let i = 0; i < s.length; i++) {
    if (charObj[s[i]] === undefined) {
      charObj[s[i]] = 1;
    } else {
      charObj[s[i]] = charObj[s[i]] + 1;
    }
  }

  for (let j = 0; j < t.length; j++) {
    if (charObj[t[j]] === 0 || charObj[t[j]] === undefined) {
      return false;
    } else {
      charObj[t[j]] = charObj[t[j]] - 1;
    }
  }

  return true;
};
