/*
  needs to be done:
    - write function that takes in array
      - where row: costs of the flower types at that position
      - costs[i][j] = cost of planting flower type J at position I
    - returning the minimum cost to plant a flower in each position
    
  
  notes
    - i need to keep track of previous position (column idx) that I choose
      - so that I do not choose a val thats adjacent to the previous
    
    - for each element in the first array, new set to keep track of what
      has been seen (row, col)
  
  
  [4, 3, 7],
  [6, 9, 1],
  [1, 19, 10]

  returns 6 = 4 + 1 + 1


*/
const positioningPlants = (costs, pos = 0, lastPlant = null, memo = {}) => {
  // i think key will be pos + lastplant? but how if it's null
  // ans: dont matter. keys will always be whats changing
  let key = pos + "," + lastPlant;
  if (key in memo) return memo[key];

  if (pos === costs.length) return 0;

  let min = Infinity;

  // this for loop only controls the columns
  for (let plant = 0; plant < costs[pos].length; plant += 1) {
    if (plant !== lastPlant) {
      let currMin =
        costs[pos][plant] + positioningPlants(costs, pos + 1, plant, memo);
      min = Math.min(min, currMin);
    }
  }

  memo[key] = min;
  return min;
};

// positioningPlants([
//   [4, 3, 7],
//   [6, 1, 9],
//   [2, 5, 3]
// ]);


// 11/27/2022
/*
  we cannot have 2 flowers of the same type planted next to each other
  
  total cost for planting at position 1 (idx 1) = $6 + $1 + $9
  
  i = row = position
  j = col = flower type
  costs[i][j] = cost of planting the flower type j at position i
  
  return the minimum cost we need to plant a flower in each position of
  the garden
  
  constraints
    -  I assume that there will be non-negative numbers
    - I assume that there will be non-zero numbers
    - 
    
    
                          [curr_row, prev_col]
                          
                 4 /          3|          \ 7
              [1, 9]         [6,9]        [1,7]
             1 /  \ 9
          [2,3]
        2 /  \ 3
      7        8
      
      
  DYN PROG
  
  recursively
    - what is my base case?
      - if my current row > costs.length 
        - return 0
      - 
  
  what do i want to do? 
    - I want to iterate through the array 
      - single loop
    
    
*/

const positioningPlants2 = (costs, pos = 0, lastPlant = null, memo={}) => {
  const key = pos + ',' + lastPlant;
  if(key in memo) return memo[key];
  
  if(pos === costs.length) return 0;
  
  let min = Infinity;
  for(let plant = 0; plant < costs[pos].length; plant += 1){
    if(plant !== lastPlant){
      const candidate = costs[pos][plant] + positioningPlants(costs, pos + 1, plant, memo)
     min = Math.min(min, candidate)      
    } 
  }
  
  
  memo[key] = min
  return min
};

// 11/28/2022

const positioningPlants3 = (costs, pos = 0, prev = null, memo={}) => {
  const key = pos + ',' + prev
  if(key in memo) return memo[key]
  if(pos === costs.length) return 0
  
  let count = Infinity
  for(let plant = 0; plant < costs[pos].length; plant += 1){
    if(plant !== prev){
      const possible = costs[pos][plant] + positioningPlants(costs, pos + 1, plant, memo)
      count = Math.min(possible, count)
    }
  }
  
  memo[key] = count
  return count
};

module.exports = {
  positioningPlants,
};
