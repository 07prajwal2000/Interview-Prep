var MyQueue = function () {
  this.sA = [];
  this.sB = [];
};

/** 
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function (x) {
  this.sA.push(x);
};

/**
* @return {number}
*/
MyQueue.prototype.pop = function () {
  while (this.sA.length) {
    this.sB.push(this.sA.pop());
  }
  const ans = this.sB.pop();
  while (this.sB.length) {
    this.sA.push(this.sB.pop());
  }
  return ans;
};

/**
* @return {number}
*/
MyQueue.prototype.peek = function () {
  return this.sA[0];
};

/**
* @return {boolean}
*/
MyQueue.prototype.empty = function () {
  return this.peek() == undefined;
};

/** 
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/