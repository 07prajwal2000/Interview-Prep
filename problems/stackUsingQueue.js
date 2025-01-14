
var MyStack = function () {
  this.arr = [];
  this.start = -1;
};

/** 
* @param {number} x
* @return {void}
*/
MyStack.prototype.push = function (x) {
  this.start++;
  if (this.arr.length - 1 >= this.start) {
    this.arr[this.start] = x;
  }
  else this.arr.push(x);
};

/**
* @return {number}
*/
MyStack.prototype.pop = function () {
  const temp = this.arr[this.start];
  this.start--;
  return temp;
};

/**
* @return {number}
*/
MyStack.prototype.top = function () {
  return this.arr[this.start];
};

/**
* @return {boolean}
*/
MyStack.prototype.empty = function () {
  return this.start < 0;
};

const myS = new MyStack();
myS.push(1); // 1
myS.push(2); // 1, 2
console.log(myS.pop()); // 2
myS.push(3); // 1, 3
console.log(myS.top()); // 3
console.log(myS.pop()); // 3
console.log(myS.pop()); // 1
console.log(myS.empty()); // t