function countSub(s, tmp) {
  const n = s.length, m = tmp.length;
  let i = 0, j = 0, count = 0;
  while (i < n) {
    if (s[i] == tmp[j]) {
      j++;
      if (j == m) {
        count++;
        j = 0;
      }
    }
    i++;
  }
  return count;
}

var longestSubsequenceRepeatedK = function (s, k) {
  const freq = {};
  for (let c of s) freq[c] = (freq[c] || 0) + 1;

  const q = [''];
  let res = '';
  while (q.length) {
    const cur = q.shift();
    for (let i = 0; i < 26; i++) {
      const key = String.fromCharCode('a'.charCodeAt(0) + i);
      if (key in freq && freq[key] >= k) {
        let str = cur + key;
        if (countSub(s, str) < k) continue;
        q.push(str);
        res = str;
      }
    }
  }
  return res;
};