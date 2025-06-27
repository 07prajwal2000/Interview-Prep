function countSub(s, tmp) {
  const n = s.length, m = tmp.length;
  let i = 0, j = 0, count = 0;
  while (i < n) {
    // if both char match
    if (s[i] == tmp[j]) {
      // increment the pointer
      j++;
      // if j reaches end, reset it and increment the counter
      if (j == m) {
        count++;
        j = 0;
      }
    }
    i++;
  }
  // this gives how many times the tmp word is in `s`.
  return count;
}

var longestSubsequenceRepeatedK = function (s, k) {
  const freq = {};
  for (let c of s) freq[c] = (freq[c] || 0) + 1;

  const q = ['']; // queue for bfs
  let res = '';
  while (q.length) {
    const cur = q.shift();
    // looping a -> z
    for (let i = 0; i < 26; i++) {
      const key = String.fromCharCode('a'.charCodeAt(0) + i);
      // checking if the key exist and count should be greater than k
      if (key in freq && freq[key] >= k) {
        // generating the str
        let str = cur + key;
        // checking if this str exist in s k times
        if (countSub(s, str) < k) continue;
        // if so, we add it to the queue
        q.push(str);
        // update the result, as it stores in lexicographical order
        res = str;
      }
    }
  }
  return res;
};