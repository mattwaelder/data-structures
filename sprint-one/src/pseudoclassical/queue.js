var Queue = function() {
  this.storage = {};
  this.currLen = 0;
};

Queue.prototype.enqueue = function (val) {
  if (this.currLen === 0) {
    this.storage[0] = val;
    this.currLen++;
  } else {
    this.storage[this.currLen] = val;
    this.currLen++;
  }
};

Queue.prototype.dequeue = function() {
  let removed = this.storage[0];
  delete this.storage[0];

  for (let [key, value] of Object.entries(this.storage)) {
    this.storage[key - 1] = value;
  }

  this.currLen <= 1 ? this.currLen = 0 : this.currLen--;

  return removed;
};

Queue.prototype.size = function () {
  return this.currLen;
};