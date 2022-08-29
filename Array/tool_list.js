"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'toolchanger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING_ARRAY tools
 *  2. INTEGER startIndex
 *  3. STRING target
 */

/*
    mod by the length of the array 
 
    ['a', 'b', 'c', 'd'] index = 1 target = d
    
    given index
        go left
            - if I hit the front of the array
                - helper function to continue to iterate from the back of array until target is found
        go right
            - if hit the back of the array
                - helper function to iterate from the front until target is found
    
 */

function toolchanger(tools, startIndex, target) {
  let count = 0;

  // look left
  while (startIdx > 0) {
    if (count < 1) {
    }
  }
}
