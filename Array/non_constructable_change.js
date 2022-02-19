function nonConstructibleChange(coins) {
  /*
		let currentAmount = 0
		while index is less than coins.length
		
			if (currentAmount + 1) < coins[idx] return currentAmount + 1
			update currentAmount
			update index
	*/
  coins.sort((a, b) => a - b);

  let currentAmount = 0;

  for (let index = 0; index < coins.length; index++) {
    if (currentAmount + 1 < coins[index]) {
      return currentAmount + 1;
    }
    currentAmount += coins[index];
  }

  return currentAmount + 1;
}
