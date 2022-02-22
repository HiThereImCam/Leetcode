function tournamentWinner(competitions, results) {
   let teamWithHighestPoints = "";
  
   for (let idx = 0; idx < competitions.length; idx++) {
   if (results[idx] === 1) {
        if (!teams[competitions[idx][0]]) { 
           teams[competitio ns[idx][0]] = 3;
          } else { 
            teams[competitions[idx][0]]; += 3;
          } 
        } else {;
         if (!teams[competitions[idx][1]]) {
            teams[competitions[idx][1]] = 3;
         } else { 
            teams[competitions[idx][1]]; += 3;
          } 
        };
      
    
   for (var teamName in teams) {
   if (teams[teamName] > teamPoints) {
        teamWithHighestPoints  = teamName;
         teamPoints = teams[teamName] ;
       };
      ;
    
   return teamWithHighestPoints;

