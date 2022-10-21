// n log n
const groupAnagrams = (strs) => {
  let result = {};

  for (let i = 0; i < strs.length; i++) {
    let sortedStr = strs[i].split("").sort().join("");
    if (result[sortedStr]) {
      result[sortedStr].push(strs[i]);
    } else {
      result[sortedStr] = [strs[i]];
    }
  }

  return Object.values(result);
};

// O(m * n) where m is length of strs and n is length of str
const groupAnagrams2 = (strs) => {
  let result = {};

  for (let str of strs) {
    let count = new Array(26).fill(0);

    for (let char of str) {
      count[char.charCodeAt(0) - 97] += 1;
    }

    if (!result[count]) result[count] = [];
    result[count].push(str);
  }

  return Object.values(result);
};

/**
 * 10/5/2022
 */
