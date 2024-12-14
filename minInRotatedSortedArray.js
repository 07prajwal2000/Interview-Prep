var findMin = function (nums) {
  let l = 0, r = nums.length - 1;
  if (nums[l] < nums[r]) return nums[l]; // no rotation
  while (l <= r) {
    let mid = (l + r) >> 1;
    if (nums[mid - 1] > nums[mid]) { // mid's previous is greater, i.e. min is mid
      return nums[mid];
    } else if (nums[mid + 1] < nums[mid]) {
      // mid is greater than mid's next, i.e. mid + 1 is min
      return nums[mid + 1];
    }
    if (nums[mid + 1] > nums[l]) { // rotated
      l = mid + 1;
    } else { // not rotated
      r = mid - 1;
    }
  }
  return nums[l];
};

console.log(findMin([3, 4, 5, 1, 2])); // 1
console.log(findMin([11, 13, 15, 17])); // 11