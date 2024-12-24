/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let ans = "";
  let tmp = word1, w1Taken = true;
  let i = 0, j = 0;
  let len = Math.min(word1.length, word2.length) * 2;
  for (let idx = 0; idx < len; idx++) {
    ans += tmp[w1Taken ? i : j];
    if (w1Taken) {
      tmp = word2;
      i++;
    } else {
      tmp = word1;
      j++;
    }
    w1Taken = !w1Taken;
  }
  while (i < word1.length) {
    ans += word1[i];
    i++;
  }
  while (j < word2.length) {
    ans += word2[j];
    j++;
  }
  return ans;
};

console.log(mergeAlternately("abc", "pqr")); // apbqcr
