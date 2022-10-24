const detectDictionary = (dictionary, alphabet) => {
  let idx = 0;
  let next = 1;

  while (next < dictionary.length) {
    let currWord = dictionary[idx];
    let nextWord = dictionary[next];
    if (!lexicalOrder(currWord, nextWord, alphabet)) {
      return false;
    }
    idx += 1;
    next = idx + 1;
  }

  return true;
};

const lexicalOrder = (word1, word2, alphabet) => {
  const maxLength = Math.max(word1.length, word2.length);

  for (let idx = 0; idx < maxLength; idx += 1) {
    let char1 = word1[idx];
    let char2 = word2[idx];

    let idxWord1 = char1 === undefined ? -Infinity : alphabet.indexOf(char1);
    let idxWord2 = char2 === undefined ? -Infinity : alphabet.indexOf(char2);

    if (idxWord1 < idxWord2) {
      return true;
    } else if (idxWord2 < idxWord1) {
      return false;
    }
  }

  return true;
};
