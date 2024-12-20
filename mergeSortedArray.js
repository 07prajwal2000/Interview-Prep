var merge = function(nums1, m, nums2, n) {
  if (n == 0) return;
  let i = m - 1, j = n - 1;
  let ptr = 0;
  for (ptr = nums1.length - 1; ptr >= 0 && i >= 0 && j >= 0; ptr--) {
      let num = nums1[i];
      if (nums1[i] >= nums2[j]) {
      num = nums1[i];
      i--;
      } else {
      num = nums2[j];
      j--;
      }
      nums1[ptr] = num;
  }
  while (i >= 0) {
      nums1[ptr] = nums1[i];
      i--;
      ptr--;
  }
  while (j >= 0) {
      nums1[ptr] = nums2[j];
      j--;
      ptr--;
  }
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [4, 5, 6], 3));