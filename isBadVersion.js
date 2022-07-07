// given isBadVersion()

let solution = (n) => {
  let left = 1;
  let right = n;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (isBadVersion(middle) && !isBadVersion(middle - 1)) {
      return middle;
    } else if (isBadVersion(middle) == false) {
      // update left and check right
      left = middle + 1;
    } else {
      right = middle;
    }
  }
};
