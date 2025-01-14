var isAnagram = function (s, t) {
  const a = Array(26);
  const b = Array(26);

  a.fill(0);
  b.fill(0);

  for (let c of s) {
    const idx = c.charCodeAt(0) - 97;
    a[idx]++;
  }

  for (let c of t) {
    const idx = c.charCodeAt(0) - 97;
    b[idx]++;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] != b[i]) return false;
  }
  return true;
};

console.log(isAnagram("anagram", "nagaram"));