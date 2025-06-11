/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  const n = s.length;
  if (numRows == n || numRows == 1) return s;
  const rows = Array(numRows);
  for (let i = 0; i < numRows; i++) rows[i] = [];
  let i = 0, row = 0;
  while (i < n) {
    for (let j = 0; j < numRows && i < n; j++) {
      rows[j].push(s[i]);
      i++;
    }
    for (let j = numRows - 2; j > 0 && i < n; j--) {
      rows[j].push(s[i]);
      i++;
    }
  }
  let ans = '';
  for (let row of rows) ans += row.join('');
  return ans;
};