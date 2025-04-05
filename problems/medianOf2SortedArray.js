/**
 * @param {number[]} a
 * @param {number[]} b
 * @return {number}
 */
var findMedianSortedArrays = function (a, b) {
  const n1 = a.length, n2 = b.length;
  if (n1 > n2) return findMedianSortedArrays(b, a);
  let l = 0, r = Math.min(n1, n2);
  while (l <= r) {
    const midA = (l + r) >> 1;
    const midB = (n1 + n2 + 1 >> 1) - midA;
    let l1 = -1e9, l2 = -1e9;
    let r1 = 1e9, r2 = 1e9;

    if (midA < n1) r1 = a[midA];
    if (midB < n2) r2 = b[midB];
    if (midA - 1 >= 0) l1 = a[midA - 1];
    if (midB - 1 >= 0) l2 = b[midB - 1];

    if (l1 <= r2 && l2 <= r1) {
      if ((n1 + n2) % 2 == 0) return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
      return Math.max(l1, l2);
    } else if (l1 > r2) r = midA - 1;
    else l = midA + 1;
  }
  return 0;
};

console.log(findMedianSortedArrays([1, 3], [2, 4]));