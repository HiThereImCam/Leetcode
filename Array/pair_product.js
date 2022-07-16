const pairProduct = (numbers, targetProduct) => {
  let numObj = {};

  for (let i = 0; i < numbers.length; i++) {
    let divisor = targetProduct / numbers[i];
    if (divisor in numObj) {
      return [numObj[divisor], i];
    }

    numObj[numbers[i]] = i;
  }
};
