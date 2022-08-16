/*
  simplest case
    [a]

  firstEle = a
  restOfEle = []
  arrWithoutFirst = [ [] ]
  
*/
const subsets = (elements) => {
  if (elements.length === 0) return [[]];

  const firstEle = elements[0];
  const restOfElements = elements.slice(1);
  const subWithoutFirst = subsets(restOfElements);
  const subWithFirst = [];

  for (const sub of subWithoutFirst) {
    subWithFirst.push([firstEle, ...sub]);
  }

  return [...subWithFirst, ...subWithoutFirst];
};

// part 2 on 8/16

/*
    base case
        if array empty then return [[]]
        
    we can choose not to add the curr val
    and to add the curr val
    
    
    
    nums = [1, 2, 3]
*/
var subsets2 = function (nums) {
  if (nums.length < 1) return [[]];

  let currEle = nums[0];
  let restOfElements = nums.slice(1);
  let arrWithoutFirst = subsets(restOfElements); // [[], [2], [3]]
  let arrWithFirst = [];

  for (let sub of arrWithoutFirst) {
    arrWithFirst.push([currEle, ...sub]);
  }

  return [...arrWithFirst, ...arrWithoutFirst];
};
