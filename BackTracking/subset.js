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
