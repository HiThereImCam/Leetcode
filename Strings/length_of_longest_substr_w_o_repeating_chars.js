var lengthOfLongestSubstring = function (s) {
  let set = new Set();

  let maxCount = 0,
    pointer = 0;

  for (let char of s) {
    while (set.has(char)) {
      set.delete(s[pointer]);
      pointer++;
    }

    set.add(char);
    maxCount = Math.max(maxCount, set.size);
  }

  return maxCount;
};
