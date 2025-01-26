/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const freq = {};
  let totalChars = 0;

  for (let c of s) {
    if (!(c in freq)) totalChars++;
    freq[c] = c in freq ? freq[c] + 1 : 1;
  }

  let max = 0, char = '';
  let result = '';
  while (totalChars) {
    for (let k in freq) {
      let c = k, count = freq[k];
      if (count > max) {
        max = count;
        char = c;
      }
    }
    delete freq[char];
    for (let c = 0; c < max; c++) {
      result += char;
    }
    max = 0;
    char = '';
    totalChars--;
  }
  return result;
};

console.log(frequencySort("cccaaa"));