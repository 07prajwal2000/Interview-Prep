/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let minLen = 1e9;
  for (let i = 0; i < strs.length; i++) {
    let cur = strs[i].length;
    minLen = Math.min(cur, minLen);
  }

  let i = 0;
  for (i = 0; i <= minLen - 1; i++) {
    let char = strs[0][i];
    let eq = true;
    for (let j = 0; j < strs.length; j++) {
      let cur = strs[j][i];
      if (char != cur) {
        eq = false;
        break;
      }
    }
    if (!eq) return strs[0].substring(0, i)
  }
  return i == 0 ? "" : strs[0].substring(0, i);
};

console.log(longestCommonPrefix(["aa", "bb"]));