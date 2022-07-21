var Queue = function() {
  var someInstance = Object.create(queueMethods);

  someInstance.storage = {};
  someInstance.currLen = 0;

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function (val) {
  if (this.currLen === 0) {
    this.storage[0] = val;
    this.currLen++;
  } else {
    this.storage[this.currLen] = val;
    this.currLen++;
  }
};

queueMethods.dequeue = function () {
  let removedFromQueue = this.storage[0];
  delete this.storage[0];

  this.currLen <= 1 ? this.currLen = 0 : this.currLen--;

  for (let [key, value] of Object.entries(this.storage)) {
    this.storage[key - 1] = value;
  }
  return removedFromQueue;
};

queueMethods.size = function () {
  return this.currLen;
};

