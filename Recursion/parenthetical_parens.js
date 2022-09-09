/*
  helper function to parse out the options from the group at the start
    - i imagine it will just be slicing the array?
*/

// returns not only the thing that is in () but everything else after it as well
const getChoices = (s) => {
  if (s[0] === "(") {
    const end = s.indexOf(")"); // tells you index of the first closing parens
    const choices = s.slice(1, end);
    const remainder = s.slice(end + 1);
    return {
      choices,
      remainder,
    };
  } else {
    return {
      choices: s[0],
      remainder: s.slice(1),
    };
  }
};

const parentheticalPossibilities = (s) => {
  if (s.length === 0) return [""];
  const allPossibilities = [];

  const { choices, remainder } = getChoices(s);
  // iterate through choices
  for (let choice of choices) {
    const remainderPossibilities = parentheticalPossibilities(remainder);
    for (let subString of remainderPossibilities) {
      // want to push the first character into the sub array
      allPossibilities.push(choice + subString);
    }
  }

  return allPossibilities;
};
