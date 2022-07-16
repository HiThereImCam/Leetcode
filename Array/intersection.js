const intersection = (a, b) => {
  // returning new array with the values themselves
  let set = new Set();
  let result = [];
  for (let i = 0; i < a.length; i++) {
    set.add(a[i]);
  }

  for (let j = 0; j < b.length; j++) {
    if (set.has(b[j])) {
      result.push(b[j]);
    }
  }

  return result;
};
/*
    set is the key here
    set also doesnt transform keys into strings
    
*/
