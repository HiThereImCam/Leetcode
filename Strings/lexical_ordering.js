const lexicalOrder = (word1, word2, alphabet) => {
  let maxLength = Math.max(word1.length, word2.length);

  for (let idx = 0; idx < maxLength; idx++) {
    let char1 = word1[idx];
    let char2 = word2[idx];

    let idxOfWord1 = alphabet.indexOf(char1);
    let idxOfWord2 = alphabet.indexOf(char2);

    if (idxOfWord1 < idxOfWord2) {
      return true;
    } else if (idxOfWord2 < idxOfWord1) {
      return false;
    }
  }

  return true;
};
