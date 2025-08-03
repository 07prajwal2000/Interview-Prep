/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  const ans = [];
  const n1 = nums1.length, n2 = nums2.length;
  const q = new MinPriorityQueue(x => x[0] + x[1]);
  for (let num of nums1) {
    q.enqueue([num, nums2[0], 0]);
  }
  while (q.size() && k--) {
    const [a, b, pos] = q.dequeue();
    ans.push([a, b]);
    if (pos + 1 < nums2.length) {
      q.enqueue([a, nums2[pos + 1], pos + 1]);
    }
  }
  return ans;
};