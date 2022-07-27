var backspaceCompare = function (s, t) {
  let sArr = [];
  let tArr = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "#") {
      sArr.pop();
    } else {
      sArr.push(s[i]);
    }
  }

  for (let j = 0; j < t.length; j++) {
    if (t[j] === "#") {
      tArr.pop();
    } else {
      tArr.push(t[j]);
    }
  }

  let sStr = sArr.join(",");
  let tStr = tArr.join(",");

  return sStr === tStr ? true : false;
};

// never forget that you can concatenate strings with the + operator
// slice(0, i -1 ) slice everything from 0 up to i - 1
// slice(i + 1)  slice everything from i + 1

/*
    Faster

var backspaceCompare = function(S, T) {
    return reduce(S) === reduce(T);
};

const reduce = (str) => {
    if (str === null) return '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '#') {
            if (i > 0) {
                str = str.slice(0, i - 1) + str.slice(i + 1);
                i -= 2;
            } else {
                str = str.slice(1);
                i--;
            }
        }
    }

    return str;
}
  */
