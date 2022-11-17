var asteroidCollision = function (asteroids) {
  let result = [];

  while (asteroids.length > 0) {
    let currentEle = asteroids.shift();
    let top = result[result.length - 1];

    if (result.length < 1) {
      result.push(currentEle);
    } else if (Math.sign(top) === Math.sign(currentEle)) {
      result.push(currentEle);
    } else {
      while (
        Math.abs(currentEle) > Math.abs(top) &&
        Math.sign(currentEle) !== Math.sign(top) &&
        result.length > 0
      ) {
        result.pop();
        top = result[result.length - 1];
      }

      if (Math.abs(currentEle) < Math.abs(top)) {
        continue;
      } else if (Math.abs(currentEle) === Math.abs(top)) {
        result.pop();
        continue;
      } else {
        result.push(currentEle);
      }
    }
  }
  return result;
};

// sol

var asteroidCollisionSol = function (asteroids) {
  const firstItem = asteroids.shift();
  const stack = [firstItem];

  for (asteroid of asteroids) {
    if (asteroid > 0) {
      stack.push(asteroid);
    } else {
      while (
        stack.length &&
        stack[stack.length - 1] > 0 &&
        stack[stack.length - 1] < Math.abs(asteroid)
      ) {
        stack.pop();
      }

      if (Math.abs(asteroid) == stack[stack.length - 1]) {
        stack.pop();
        continue;
      }

      if (Math.abs(asteroid) < stack[stack.length - 1]) {
        continue;
      }

      stack.push(asteroid);
    }
  }

  return stack;
};


// 11/17/2022
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */

 const collision = (prev, curr) => {
  if((prev < 0 && curr < 0) ||
      (prev > 0 && curr > 0)
    ) return false
  
  return true
}

var asteroidCollision = function(asteroids) {
  let stack = []
  
  for(let i = 0; i < asteroids.length; i += 1){
      let curr = asteroids[i]
      
      if(stack.length < 1){
          stack.push(curr)
      }else{
          let prev = stack[stack.length - 1]
          while(
              stack.length > 0 &&
              curr < 0 &&
              prev > 0
          ) {
              let diff = curr + prev
              
              if(diff === 0){
                  curr = 0
                  stack.pop()
              }else if(diff < 0){
                  stack.pop()
                  prev = stack[stack.length - 1]
              }else{
                  // because
                  curr = 0
              }
          }
          
          if(curr !== 0){
              stack.push(curr)
          }
      }
  }
  
  
  return stack
};