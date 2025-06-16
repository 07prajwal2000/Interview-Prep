/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();
  for (let str of strs) {
    const arr = Array(26).fill(0);
    for (let c of str) {
      arr[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    const key = arr.join(',');
    if (map.has(key)) {
      map.get(key).push(str);
    } else {
      map.set(key, [str]);
    }
  }
  return Array.from(map.values());
};