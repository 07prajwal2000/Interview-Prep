
var RandomizedSet = function () {
  this.arr = [];
  this.count = 0;
  this.map = {};
};

/** 
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.insert = function (val) {
  if (val in this.map) return false;
  this.arr.push(val);
  this.map[val] = this.arr.length - 1;
  return true;
};

/** 
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.remove = function (val) {
  if (!(val in this.map)) return false;
  let idx = this.map[val];
  this.arr[idx] = this.arr[this.arr.length - 1];
  this.map[this.arr[idx]] = idx;
  this.arr.pop();
  delete this.map[val];
  return true;
};

/**
* @return {number}
*/
RandomizedSet.prototype.getRandom = function () {
  let idx = rand(0, this.arr.length);
  return this.arr[idx];
};

function rand(min, max) {
  return parseInt(Math.random() * (max - min));
}

/** 
* Your RandomizedSet object will be instantiated and called as such:
* var obj = new RandomizedSet()
* var param_1 = obj.insert(val)
* var param_2 = obj.remove(val)
* var param_3 = obj.getRandom()
*/