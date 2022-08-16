/*
    sliding window
        size = 2
    
    for each window
        - split, sort each value
    if the two values ===
        return the index

    THIS TIMED OUT
*/
var findAnagrams = function (s, p) {
  let result = [];

  let i = 0;
  let j = i + p.length;
  p = p.split("").sort().join(",");

  while (i <= s.length - j) {
    let currStr = s.slice(i, i + j);
    currStr = currStr.split("").sort().join(",");

    if (currStr === p) {
      result.push(i);
    }

    i += 1;
  }

  return result;
};
