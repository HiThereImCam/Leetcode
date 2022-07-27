/*
    return an array of peoples numbers as they have left the queue

    constraints
        - a person can withdraw at MOST k units
        - amount[i] is the amount of money required by person i
        - people are numbers from 1 to n
        
    cumulative amount of money withdrawn === current
    money required === total
    
    '1': {
        total: 0,
        current: 0
    }

 */
function getFinalOrder(k, amount) {
  let result = [];
  let customerMap = {};
  let queue = [];

  let i = 0;

  while (i < amount.length) {
    customerMap[i + 1] = {
      total: amount[i],
      current: 0,
    };

    queue.push(i + 1);
    i += 1;
  }

  /*
            amount = [2 5 1]
            queue = [1 2 3]
            
            j = 0
            currentPerson = 1
            total = {
                1: {
                    total:  2,
                    current: 0
                }
            }
            current = 0
            
            result = [1] 
         */

  let j = 0;
  while (queue.length > 0) {
    if (j > amount.length) {
      j = j % amount.length;
    }
    let currentPerson = queue.shift();
    let total = customerMap[j + 1]["total"];
    let current = customerMap[j + 1]["current"];

    if (total - current <= k) {
      result.push(currentPerson);
    } else {
      customerMap[j + 1]["current"] += k;
      queue.push(currentPerson);
    }
    j += 1;
  }
  return result;
}
