/*
  Recursive aspect
    - DFS
    - think graph
    - also think memoization so that you do not do the same work twice?
    
  question should be:
    - what am i building towards?
  
  what i didnt get
    - i didnt know what I was building towards
    
  THE ANSWER:
    - the evaluated string needs to be looked at as well
    ex: Walk the $ANIMAL$ in the $LOCATION$! 
        evaluates to
        Walk the dog in the $ANIMAL$ park!
        
        we can just take the string from above recursively call the function
  
  
  
*/


const tokenTransform = (s, tokens) => { 
    let output = []
    let i = 0;
    let j = 1
    
    while(i < s.length){
      if(s[i] !== '$'){
        output.push(s[i])
        i += 1
        j = i + 1
      }else if(s[j] !== '$'){
        j += 1
      }else{
        let key  = s.slice(i, j + 1)
        let value = tokens[key]
        const evaluateValue = tokenTransform(value, tokens)
        tokens[key] = evaluateValue; // mutating tokens but you can memoize
        output.push(evaluateValue)
        
        i = j + 1
        j = i + 1
      }
    }
    
    return output.join('')
  };
  