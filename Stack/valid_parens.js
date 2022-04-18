/**
 * The case that got me was:
 *      - open brackets must be closed in correct order 
 * meaning that if I have "[(])" => false 
 * 
 * the way to get around that is
 * 
 * map values to its opposite: { '[': ']' }
 *  
 * while iterating through string
 * if left side push into stack
 * if right side, pop of stack. 
 *      - if map[poppedValue] !== currentVal 
 *            return false
 * 
 * 
 * check if stack is empty
 *      - if not return false
 *      - return true
 *
 * 
 */


var isValid = function (s) {
  if (s.length % 2 !== 0 || s.length === 0) return false;
  let legend = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] in legend) {
      stack.push(s[i]);
    } else if (legend[stack.pop()] !== s[i]) {
      return false;
    }
  }

  return stack.length ? false : true;
};