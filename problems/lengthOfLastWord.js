var lengthOfLastWord = function (s) {
  const n = s.length;
  let i = n - 1;
  while (i >= 0 && s[i] == " ") i--;
  let j = i;
  while (i >= 0 && s[i] != " ") i--;
  return j - i;
};