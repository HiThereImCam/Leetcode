/*
    intialize array: [0, 0, 0, 0, 0] size = 5
    
    first insertion:
        - [0, 0, 'ccccc', 0, 0]
        - returns an []
        
    second insertion:
        - ['aaaaa', 0, 'ccccc']
        - returns 'aaaaa'
        
        state of current array:
            [0, 0, 'ccccc', 0, 0]
    
    third insertion:
        - [0, 'bbbbb', 'ccccc', 0, 0]
        - returns ['bbbbb', 'ccccc']
        
    ideas
    
        implement a stack
        (3, 'ccccc')
        
        
        first insertion
        stream = [0, 0, 0, 0, 0]
        let pointer = 0
        stack = [3]
        
        
        second insertion 
         stream = [0, 0, 'ccccc', 0, 0]
         pointer = 0
         stack=[3]
         (1, 'aaaaa')
                  result = ['aaaaa']
         
         ['aaaaa', 0, 'ccccc', 0, 0]
                  ptr 

        
        keep in mind that I have to decrement idKey by 1 to insert into array
        
*/

/*
    OrderedStream(5)
        - this.ptr = 0
        - this.stream = [0,0,0,0,0]
        
    insert(3, 'ccccc')
        result = []
        idx = 2
        this.stream[2] = 'ccccc'
        
        this.ptr = 0
        stream.length = 5
        stream[0] = 0
        
    []
    
    insert(1, 'aaaaa')
    ptr = 1
    stream = ['aaaaa', 0, 'ccccc']
    result = []
    idx = 0
    
    ['aaaaa']
    
*/

var OrderedStream = function (n) {
  this.stream = new Array(n).fill(0);
  this.ptr = 0;
};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (idKey, value) {
  let result = [];
  let idx = idKey - 1;

  this.stream[idx] = value;

  while (this.ptr < this.stream.length) {
    if (this.stream[this.ptr] !== 0) {
      result.push(this.stream[this.ptr]);
      this.ptr += 1;
    } else {
      break;
    }
  }

  return result;
};
