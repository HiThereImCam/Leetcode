/*
  ca
    - is not a combination
    
  Notes:
    - for every element, i want to create a subarray that contains k amount of characters
    - the last element is never at the start of its own subArray
    - I want to iterate through every element up til array.length - 1
    
    [a, b] -> valid 
    [b, a] -> is not valid
    
    - I want to isolate the first character
      - keep slicing the array until the length < the length of arguments
    - 
    
  
  simplest example:
    - [a], 1
    - [[a, b], 2]
    [[a, b]]
  
  
  function
    - base case 
      if(array.length === k) return the current array
    
    - isolate the first character in the array
      a
    
    make my recursive call with the sliced array
    [b, c]
    
    for each character in the array
    i can create a subArray pushing the first character and then adding in the
    elements in from the sliced array til the subArray length is equivalent
    to the target value
  
  
  [a b c d e] 3
  
  a b c
  a b d
  a b e
  b c d
  b c e
  c d e
  
  
  
  
  Actual:
    - base cases
      if k === 0
        return [[]]
      
      if k > items.length return []
    
    - com
      
*/

const createCombinations = (items, k) => {
  if (k === 0) return [[]];
  if (items.length < k) return []; // 3 items but k is 4. there is no combinations

  const first = items[0];

  const partialCombos = createCombinations(items.slice(1), k - 1);
  const combosWithFirst = [];

  for (let partialCombo of partialCombos) {
    combosWithFirst.push([first, ...partialCombo]);
  }

  const combinationWithoutFirst = createCombinations(items.slice(1), k);
  return [...combosWithFirst, ...combosWithoutFirst];
};

/*
   a
   partialCombinations: [[b], [c]]
   
   partialCombinations is a 2D array
   partialCombination is a 1D array
   
   
   combinationsWithoutFirst(['b', 'c'], 2)
   returns [['b', 'c']]
 */
