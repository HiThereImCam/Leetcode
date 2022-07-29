/*
    given a password
        - return the count of subpasswords

    a password is valid only if 
        - @ least one vowel
        - @ least one consonent 
    
    ex hackerrank
        - 3
*/

const isValidPassword = (password) => {
  let vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  };

  let str = "";
  let idx = 0;
  let count = 0;
  let vowelFlag = false;
  let consonentFlag = false;

  while (idx < password.length) {
    if (vowels[password[idx]]) {
      vowelFlag = true;
    } else {
      consonentFlag = true;
    }

    if (vowelFlag && consonentFlag) {
      count += 1;
      vowelFlag = false;
      consonentFlag = false;
    }

    idx += 1;
  }

  return count;
};
