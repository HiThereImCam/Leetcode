/*
    const [flaskNumber, availableMarking] = markings[i]
    
    let wasted = []
    flaskNumber = idx of wasted
    wasted[flaskNumber] = totalWastedVal
    
    []
    
    
    if availableMarking >= requirements[i] where i is the idx 
        - difference between availableMarkings - requirments[i]
        - keep iterating through requirements until availableMarkings < requirments[i]
          || i < length of requirements 
          
          
    wasted = [1,0,0]
    idx = 2
    
    flaskNumber = 0
    availableMarkings = 5
    reqIdx = 0
    requirments[reqIdx] = 4
    
*/

function chooseFlask(requirements, flaskTypes, markings) {
  let wasted = [];

  let idx = 0;
  let reqIdx = 0;
  while (idx < markings.length) {
    const [flaskNumber, availableMarking] = markings[idx];

    if (reqIdx === requirements.length) reqIdx = 0;
    while (availableMarking >= requirements[reqIdx]) {
      if (wasted[flaskNumber] !== undefined) {
        wasted[flaskNumber] += availableMarking - requirements[reqIdx];
      } else {
        wasted[flaskNumber] = availableMarking - requirements[reqIdx];
      }

      reqIdx++;
    }

    idx++;
  }

  if (wasted.length < 1) return -1;

  let minVal = Infinity;
  let idxOfMinVal = Infinity;

  console.log("wasted: ", wasted);
  for (let i = 0; i < wasted.length; i++) {
    if (wasted[i] < minVal) {
      minVal = wasted[i];
      idxOfMinVal = i;
    }
  }

  return idxOfMinVal;
}
