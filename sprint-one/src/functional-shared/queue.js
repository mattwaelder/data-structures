var Queue = function() {
  var someInstance = {};

  someInstance.storage = {};
  someInstance.currLen = 0;

  //extend methods obj to instances
  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function (val) {
  if (this.currLen === 0) {
    // console.log('empty, adding', val);
    this.storage[0] = val;
    this.currLen++;
    // console.log(this.storage);
  } else {
    // console.log('adding', val);
    this.storage[this.currLen] = val;
    this.currLen++;
    // console.log(this.storage);
  }
};

queueMethods.dequeue = function () {
  // console.log('dequeue');
  // console.log('storage before', this.storage);
  var frontOfQueue = this.storage[0];
  delete this.storage[0];
  // console.log('removing this', frontOfQueue);
  this.currLen <= 1 ? this.currLen = 0 : this.currLen--;
  // console.log('new currLen', this.currLen);

  for (var [key, value] of Object.entries(this.storage)) {
    this.storage[key - 1] = value;
  }

  // console.log('storage after', this.storage);

  return frontOfQueue;
};

queueMethods.size = function () {
  return this.currLen;
};


