/*
                                    catsanddog
                            cat  /               \   cats
                            sanddog                 anddog


                                        dog       [dog]
                                      [] |
                                         ""
                            returned -> [dog]           
                                      
                                        
*/
var wordBreak = function (s, wordDict, memo = {}) {
  if (s in memo) return memo[s];
  if (s.length === 0) return [];

  let result = [];

  for (let word of wordDict) {
    if (s.startsWith(word)) {
      let suffix = s.slice(word.length);
      let combos = wordBreak(suffix, wordDict);
      if (combos.length === 0 && suffix.length === 0) {
        result.push(word);
      } else {
        combos.forEach((combo) => result.push(word + " " + combo));
      }
    }
  }

  memo[s] = result;
  return memo[s];
};
