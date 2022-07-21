var Stack = function() {
  this.storage = {};
  this.currLen = 0;
};

Stack.prototype.push = function (val) {
  if (this.currLen === 0) {
    this.storage[0] = val;
    this.currLen++;
  } else {
    this.storage[this.currLen] = val;
    this.currLen++;
  }
};

Stack.prototype.pop = function () {
  let removed = this.storage[this.currLen - 1];
  delete this.storage[this.currLen - 1];
  this.currLen <= 1 ? this.currLen = 0 : this.currLen--;
  return removed;

};

Stack.prototype.size = function () {
  return this.currLen;
};