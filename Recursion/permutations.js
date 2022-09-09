/*
  edge cases
    - ['a', 'a', 'a'] -> not valid
  
  base case
  if the idx === items.length return
  
  main loop
    iterate through the array
    
  ['a', 'b', 'c']  
  
  for each iteration 
    i want to create an array
    i want to push the current value in the array
  
  
  
  questions that I have
    - how do you ensure that you are not pushing the same 
      permutation into the result array?
    - I'm having a hard time understanding how to push the next value into
      the array
    - what am I returning on my base cases
    - do I have to concatenate my returned sub array?
    
  
  
*/

const permutations = (items) => {
  if (items.length === 0) return [[]];

  let first = items[0];
  let perms = permutations(items.slice(1));
  let fullPermutations = [];

  for (let perm of perms) {
    for (let i = 0; i <= perm.length; i++) {
      fullPermutations.push([...perm.slice(0, i), first, ...perm.slice(i)]);
    }
  }

  return fullPermutations;
};
