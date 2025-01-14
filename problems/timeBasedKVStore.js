
var TimeMap = function () {
  this.map = {};
};

/** 
* @param {string} key 
* @param {string} value 
* @param {number} timestamp
* @return {void}
*/
TimeMap.prototype.set = function (key, value, timestamp) {
  if (key in this.map) {
    this.map[key].push([value, timestamp]);
  } else {
    this.map[key] = [[value, timestamp]];
  }
};

/** 
* @param {string} key 
* @param {number} timestamp
* @return {string}
*/
TimeMap.prototype.get = function (key, timestamp) {
  if (!(key in this.map)) return "";
  const arr = this.map[key];
  let l = 0, r = arr.length - 1;
  let ans = "";
  while (l <= r) {
    const mid = (l + r) >> 1;
    if (arr[mid][1] <= timestamp) {
      ans = arr[mid][0];
      l = mid + 1;
    } else r = mid - 1;
  }
  return ans;
};

/** 
* Your TimeMap object will be instantiated and called as such:
* var obj = new TimeMap()
* obj.set(key,value,timestamp)
* var param_2 = obj.get(key,timestamp)
*/
// https://leetcode.com/problems/time-based-key-value-store/