function firstNonRepeatingCharacter(string) {
  if (string.length === 1) return string.length - 1;

  let charCount = {};

  for (let i = 0; i < string.length; i++) {
    if (charCount[string[i]] === undefined) {
      charCount[string[i]] = 1;
    } else {
      charCount[string[i]] += 1;
    }
  }

  for (let j = 0; j < string.length; j++) {
    if (charCount[string[j]] === 1) {
      return j;
    }
  }

  return -1;
}
