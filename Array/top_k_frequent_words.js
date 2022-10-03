/*
    constraints
        - words
            -  1 <= words.length <= 500
        - k
            - [1, number of unique strings]
            
    returns sorted by the frequency from highest to lowest
        - if the words have the same frequency 
            - sort
            
    what is the simplest case?
        - ['i']
            - count is 1 
            - return ['i']
    
    can we use the indices as buckets?
        - ex: ['i', 'i', 'let']
            - can have a bucket array
                - [['let'], ['i']]
                      1       2
                - meaning that we'd have to create an array that is 1 greater than the length
    
    idea
        - create a word map
            - key: word val: count of word
        
        - iterate through words and add vals to word map
        
        - iterate through word map to put words in the correct buckets
            - the keys also indicate how many unique values there are
            - therefore, at most we'd have an array of length wordCount 
            - might need to come up with a modding strategy to put values in correct bucket
                - if i have 4 unique words
                    - what if 1 word shows up 15 times
            - modding might cause collisions
            
            
            - sort if length of bucket > 1 
        
        - decrement through bucket while k > 0
            - add words to result array
            
    word map
        - at most contains count of unique characters
            - n
    
    buckets array
        - at most n characters
    
    sorting - n log n
    
    
*/

const getWordCount = (words) => {
  let wordCount = {};

  for (let word of words) {
    if (word in wordCount) {
      wordCount[word] += 1;
    } else {
      wordCount[word] = 1;
    }
  }

  return wordCount;
};

/*
    {
        i: 2, 
        love: 2, 
        leetcode: 1, 
        coding: 1
    }
    
  
    keys: [i, love, leetcode, coding]
    
    key: love
    currCount: 2
    
    
    
*/

const getWordBucket = (wordCount, length) => {
  let result = new Array(length).fill(0); // length = 5 -> [0,0,0,0,0]
  let keys = Object.keys(wordCount);

  for (let key of keys) {
    let currCount = wordCount[key];

    if (!Array.isArray(result[currCount])) {
      result[currCount] = [key];
    } else {
      result[currCount].push(key);
      result[currCount].sort();
    }
  }

  return result;
};

/*
      result: [0,[coding, leetcode], [i, love],0,0,0,0]
               0    1                   2
*/

var topKFrequent = function (words, k) {
  let wordCount = getWordCount(words);
  let bucket = getWordBucket(wordCount, words.length + 1);
  let result = [];

  // decrement through the buckets til k = 0
  let idx = bucket.length - 1;
  let count = 0;
  while (idx > 0) {
    if (bucket[idx] !== 0) {
      for (let word of bucket[idx]) {
        if (count === k) break;
        result.push(word);
        count += 1;
      }
    }
    idx -= 1;
  }

  return result;
};
