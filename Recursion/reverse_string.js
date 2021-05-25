/**
 * Reverse a string with a recursion.
 *
 * Do not allocate extra space for another array, you must do this
 * by modifying the input array in-place with 0(1) extra memory
 */

var reverseString = function (s) {
  if (s.length == 0) {
    return;
  }

  var temp = s[0];
  s.shift();
  reverseString(s);
  s.push(temp);
};

/**
 * What is this doing?
 *
 * s.shift() is a way to remove first element in string or array
 *
 * ["h", "e", "l", "l", "o"]
 *
 * var temp = "h"
 * s.shift() -> s = ["e", "l", "l", "o"]
 * reverseString(s) where s is ["e", "l", "l", "o"]
 *
 * var temp = "e"
 * s.shift() -> s = ["l", "l", "o"]
 * reverseString(s) where s is ["l", "l", "o"]
 *
 * var temp = "l"
 * s.shift() -> s = ["l", "o"]
 * reverseString(s) where s is ["l", "o"]
 *
 * var temp = "l"
 * s.shift() -> s = ["o"]
 * reverseString(s) where s is ["o"]
 *
 * var temp = "o"
 * s.shift() -> s = []
 * reverseString(s) where s = []
 *
 * if s.length == 0 return
 *
 * s = []
 *
 * var temp = "o"
 * s.push(temp)
 *
 * s = ["o"]
 *
 * var temp = "l"
 * s.push(temp)
 *
 * s = ["o", "l"]
 *
 * var temp = "l"
 * s.push(temp)
 *
 * s = ["o", "l", "l"]
 *
 * var temp = "e"
 * s.push(temp)
 *
 * s = ["o", "l", "l", "e"]
 *
 * var temp = "h"
 * s.push(temp)
 *
 * s = ["o", "l", "l", "l", "h"]
 *
 */
