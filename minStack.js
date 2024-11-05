
var MinStack = function () {
  this.stack = [];
  this.minStack = [];
};

/** 
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function (val) {
  this.stack.push(val);
  this.minStack.push(Math.min(val, this.minStack[this.minStack.length - 1] ?? Infinity));
};

/**
* @return {void}
*/
MinStack.prototype.pop = function () {
  this.minStack.pop();
  this.stack.pop();
};

/**
* @return {number}
*/
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};

/** 
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/
const minStack = new MinStack();
minStack.push(0);
minStack.push(1);
minStack.push(0);
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.getMin());