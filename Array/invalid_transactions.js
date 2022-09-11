/*
    const [name, time(minutes), amount, city] = transactions[i]
    
    return a list of transactions that may be invalid (any order)
    
    how can it possibly be invalid?
        - amount exceeds $1000
        - occurs within 60 minutes of anoither transaction with the same name in a different city
        
    can i assume that it will always be the structure of
    [name, time, amount, city]
    
    because if so
        - I'm thinking 3 different Hashmaps
            
            Amount Hash
            -----------
            key - name
            val - amount
            
            Time Hash
            ---------
            key - name
            val - time
            
            City Hash
            ---------
            key - name
            val - city
    
        - then iterate through the transactions array like a queue
        
        - maybe we do not need to iterate like a queue but we can just iterate
        
        
                
    transactions = ["alice,20,800,mtv","alice,50,100,beijing"]
    [name, time, amount, city]
    
    alice 50 100 beijing = transaction
    
    timeMap = {
        'alice': 20
    }
    
    cityMap = {
        'alice': mtv
    }
    
    amountMap = {
        'alice': 800
    }
*/

const checkTime = (timeMap, name, currTime) => {
  let prevTime = timeMap.get(name);
  if (Math.abs(currTime - prevTime) <= 60) {
    return true;
  }

  return false;
};

const checkCity = (cityMap, name, currCity) => {
  let prevCity = cityMap.get(name);
  if (prevCity !== currCity) {
    return true;
  }

  return false;
};

var invalidTransactions = function (transactions) {
  const nameMap = new Map();
  const amountMap = new Map();
  const timeMap = new Map();
  const cityMap = new Map();
  let invalid = [];

  for (let idx = 0; idx < transactions.length; idx++) {
    let transaction = transactions[idx].split(",");
    const [name, time, amount, city] = transaction;

    if (Number(amount) > 1000) {
      invalid.push(transactions[idx]);
    } else if (!nameMap.has(name)) {
      nameMap.set(name, [transactions[idx]]);
      amountMap.set(name, Number(amount));
      timeMap.set(name, Number(time));
      cityMap.set(name, city);
    } else {
      // check if time is within and including 60 minutes
      if (
        checkTime(timeMap, name, time) === true &&
        checkCity(cityMap, name, city) === true
      ) {
        let prevTransaction = nameMap.get(name);

        invalid = [...invalid, ...prevTransaction, transactions[idx]];
      } else {
        let prevTransaction = nameMap.get(name);
        nameMap.set(name, [...prevTransaction, transactions[idx]]);
        amountMap.set(name, amount);
        timeMap.set(name, time);
        cityMap.set(name, city);
      }
    }

    console.log("name: ", nameMap.get(name));
    //["bob,689,1910,barcelona","bob,832,1726,barcelona","bob,820,596,bangkok"]
    // because of the first if statement, the first two values never get in there
    // meaning there is nothing to compare to for bob, 820, 596, bangkok
  }

  return invalid;
};
