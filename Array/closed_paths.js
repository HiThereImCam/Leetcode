/*
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER number as parameter.
 */

function closedPaths(number) {
  let closedPathsVals = { 0: 1, 4: 1, 6: 1, 9: 1, 8: 2 };

  let numToString = number.toString();
  let numArr = numToString.split("");

  let result = 0;

  numArr.forEach((value) => {
    if (closedPathsVals[value]) {
      result += closedPathsVals[value];
    }
  });

  return result;
}
