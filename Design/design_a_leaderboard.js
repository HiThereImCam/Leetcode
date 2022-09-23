/*
    things that we need:
        - javascript obj
            - key: playerID, val: score
        
        - array to hold the scores of the top k players
            - we would need to sort the array to get the top k players
                - descending order
                - iterate til idx < k
        
        - reset
            - takes in playerID 
            - the value inside our obj is set to 0 
            - the value inside our array is set to 0
            
        top is an array
            - indices = score
            - contents of the array contains the playerID's all of the same score
                - SET
        
        
        
    
    top function
        sum = 0
        - while iterating from the back of count
            - if size of the set > 0
               sum += Set.size() * index
              
            - decrement the index by Set.size()
            
        let sum = 0
    let count = 0
    let idx = 100
    
    while(idx > 0){
        if(count === K){
            return sum
        }
        
        let bucket = this.scores[idx]
        if(bucket.size > 0) {
            bucket.forEach(playerId => {
                if(count === K) return sum
                sum += idx
                count += 1
            })
        }
        
        idx -= 1
    }
    
*/

var Leaderboard = function () {
  this.players = [];
  this.leaderboard = new Map();
};

/**
 * @param {number} playerId
 * @param {number} score
 * @return {void}
 */
Leaderboard.prototype.addScore = function (playerId, score) {
  if (this.leaderboard.has(playerId)) {
    let prevScore = this.leaderboard.get(playerId);
    this.leaderboard.set(playerId, prevScore + score);
  } else {
    this.leaderboard.set(playerId, score);
    this.players.push(playerId);
  }

  return;
};

/**
 * @param {number} K
 * @return {number}
 */
Leaderboard.prototype.top = function (K) {
  this.players.sort(
    (a, b) => this.leaderboard.get(b) - this.leaderboard.get(a)
  );

  let i = 0;
  let sum = 0;

  while (i < K) {
    let currentPlayer = this.players[i];
    sum += this.leaderboard.get(currentPlayer);

    i += 1;
  }

  return sum;
};

/**
 * @param {number} playerId
 * @return {void}
 */
Leaderboard.prototype.reset = function (playerId) {
  this.leaderboard.set(playerId, 0);
};
