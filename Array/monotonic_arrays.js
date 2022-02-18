function isMonotonic(array) {
  if (array.length === 0 || array.length === 1) return true;

  let flag;

  for (let i = 0, j = 1; j < array.length; i++, j++) {
    if (!flag) {
      if (array[i] < array[j]) {
        flag = "increasing";
        continue;
      } else if (array[i] === array[j]) {
        continue;
      } else {
        flag = "decreasing";
        continue;
      }
    }

    if (array[i] < array[j] && flag === "decreasing") return false;
    if (array[i] > array[j] && flag === "increasing") return false;
  }

  return true;
}
