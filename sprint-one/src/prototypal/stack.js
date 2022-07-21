var Stack = function() {
  //making new instances with method container as prototype
  var someInstance = Object.create(stackMethods);

  someInstance.storage = {};
  someInstance.currLen = 0;

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function (val) {

  if (this.currLen > 0) {
    this.storage[this.currLen] = val;
    this.currLen++;
  } else {
    this.storage[0] = val;
    this.currLen++;
  }
};

stackMethods.pop = function () {

  let popped = this.storage[this.currLen - 1];
  delete this.storage[this.currLen - 1];
  this.currLen <= 1 ? this.currLen = 0 : this.currLen--;
  return popped;
};

stackMethods.size = function () {

  return this.currLen;
};