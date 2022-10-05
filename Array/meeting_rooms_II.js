var minMeetingRooms = function (intervals) {
  const startArr = getSortedArray(intervals, 0);
  const endArr = getSortedArray(intervals, 1);

  let count = 0;
  let finalCount = 0;
  let startIdx = 0;
  let endIdx = 0;

  while (startIdx < startArr.length) {
    if (startArr[startIdx] < endArr[endIdx]) {
      count += 1;
      finalCount = Math.max(count, finalCount);
      startIdx += 1;
    } else {
      count -= 1;
      endIdx += 1;
    }
  }

  return finalCount;
};

/**
 * 10/4/2022
 */

const getSortedArray = (intervals, idx) => {
  let result = [];

  for (let i = 0; i < intervals.length; i++) {
    result.push(intervals[i][idx]);
  }

  return result.sort();
};

var minMeetingRooms = function (intervals) {
  const startArr = getSortedArray(intervals, 0);
  const endArr = getSortedArray(intervals, 1);

  let count = 0;
  let finalCount = 0;
  let startIdx = 0;
  let endIdx = 0;

  while (startIdx < startArr.length) {
    if (startArr[startIdx] < endArr[endIdx]) {
      count += 1;
      finalCount = Math.max(count, finalCount);
      startIdx += 1;
    } else {
      count -= 1;
      endIdx += 1;
    }
  }

  return finalCount;
};
