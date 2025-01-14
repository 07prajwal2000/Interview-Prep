var findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let tempCount = 0;
  for (let num of nums) {
    if (num == 1) {
      tempCount++;
      count = Math.max(count, tempCount);
      continue;
    }
    tempCount = 0;
  }
  return count;
};