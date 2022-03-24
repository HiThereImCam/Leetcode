function addDigitsToMap() {
  let map = {};
  let currentCharCode = 97;
  for (let i = 2; i < 10; i++) {
    let arrayOfChars = [];
    for (let j = 0; j < 3; j++) {
      arrayOfChars.push();
    }
    // get first 3 letters
  }
}

var letterCombinations = function (digits) {
  /*
        "23"
        map = new Map()
        
        2 -> ["a", "b ","c"]
        3 -> ["d", "e", "f"]
        
        1.) create new map
                - iterate through char codes
        
        for each character in the first array
        create a queue of characters of the remaining numbers
        
        234
        2 -> ["a", "b ","c"]
        3 -> ["d", "e", "f"]
        4 -> ["g", "h", "i"]
        
        string combinations must equal the length of given string
        
        23
        queue = [d, e, f]
        val = a
        
        result = []
        iterate through queue 
            shift val off of queue and add to current val
            check if the length of new val === to length of digits
                yes
                    - push to result
    */
};
