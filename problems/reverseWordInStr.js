/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let ans = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == " ") continue;
    let j = i;
    while (i < s.length && s[i] != " ") i++;
    if (i == j) continue;
    ans.push(s.substring(j, i));
  }
  return ans.reverse().join(" ");
};

console.log(reverseWords("the sky is blue"));