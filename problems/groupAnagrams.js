function genArr(s) {
  const arr = Array(26);
  arr.fill(0);
  for (let c of s) {
    arr[c.charCodeAt(0) - 97]++;
  }
  return arr;
}

/**
* @param {string[]} strs
* @return {string[][]}
*/
var groupAnagrams = function (strs) {
  const map = {};
  for (let s of strs) {
    const arr = genArr(s);
    if (arr in map) {
      map[arr].push(s);
      continue;
    }
    map[arr] = [s];
  }
  return Object.values(map);
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));