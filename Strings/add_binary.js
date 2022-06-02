/**
 * didn't complete will try again tomorrow
 * below is what i had
 *
 * several things that I learned
 * a && b are not necessarily the same length
 * had the right idea about reversing the string
 * the + operator in front of a variable is a way to change string to number
 * I remember that mod % 2 checks for carry over
 *
 */

var addBinary = function (a, b) {
  // use pow as counter for Math.pow
  let power = 0;
  let sum = 0;
  for (let i = a.length - 1; i >= 0; i--) {
    if (a[i] === 1) {
      sum += Math.pow(2, power);
    }

    power++;
  }

  power = 0;
  for (let j = j.length - 1; j >= 0; j--) {
    if (a[j] === 1) {
      sum += Math.pow(2, power);
    }

    power++;
  }
};
