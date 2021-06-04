/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // decrement from the back of the array
  // check for carry over
  // if carry over, turn replace element with 0
  // create variable that holds the carry over
  // unshift() if variable != 0

  let carryOver = 0;

  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9 && carryOver === 1) {
      digits[i] = 0;
    } else if (digits[i] === 9) {
      digits[i] = 0;
      carryOver = 1;
    } else {
      digits[i] += 1;
      carryOver = 0;

      return digits;
    }
  }

  if (carryOver === 1) {
    digits.unshift(1);
  }

  return digits;
};
