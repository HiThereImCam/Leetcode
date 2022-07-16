const mostFrequentChar = (s) => {
  let charCountObj = {};
  let freqChar = "";
  let freqCharCount = 0;

  /*
    s = bookkeeper
    charCountObj = {
      "b": 1,
      "o": 2,
      "k": 2, 
      "e": 3,
      "p": 1,
      "r": 1
    }
  */

  for (const index in s) {
    if (charCountObj[s[index]]) {
      charCountObj[s[index]] += 1;
    } else {
      charCountObj[s[index]] = 1;
    }
  }

  /*
    s = sees
    freqCharCount = 2
    freqChar = 's'
    key = s e
    charCountObj[key]: 2 2
    s.indexOf(s) = 0
    s.indexOf(e) = 1
    should return s
    
    
  */

  //iterate through charCountObj to check for the longest one
  for (const key in charCountObj) {
    if (charCountObj[key] === freqCharCount) {
      // check if the current key/val === the current freqCharCount
      // return the val that came first
      freqChar = s.indexOf(freqChar) < s.indexOf(key) ? freqChar : key;
    }
    // key is the characters {'a', 'b'...}
    //check if the current key/val > the current freqCharCount
    // if yes, update freqCharCount && the freqChar
    if (charCountObj[key] > freqCharCount) {
      freqCharCount = charCountObj[key];
      freqChar = key;
    }
  }

  return freqChar;
};

/*
    What I could have done better
    1.) when using for in w/ a string
        for(const index in str)
        remember that the created const var is
        accessing referring to the index in str
    2.) if i wanted get direct access of the val in str
        for(const val of str)
    3.) I do not need to keep count of the char
        accessing the count via charCountObj[freqChar]
        will do that
    4.) I DO NOT NEED TO KEEP TRACK OF THE INDEX
        The object will maintain the order of which keys are set
        so I only need to check if a value is STRICTLY greater
        than the current freqChar
*/
