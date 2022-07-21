var Stack = function() {
  var someInstance = {};

  someInstance.storage = {};
  someInstance.currLen = 0;

  //extend methods obj to instances
  _.extend(someInstance, stackMethods);

  return someInstance;
};



//creation of obj to hold all the methods
// Stack.stackMethods = {};
var stackMethods = {};

//those methods
stackMethods.push = function (val) {
  // console.warn('////////////// PUSH');

  //do this.push
  //if storage length > 1
  if (this.currLen > 0) {
    // console.log('pushing len > 1');

    this.storage[this.currLen] = val;
    this.currLen++;

    // console.log('storage post push', this.storage);
    // console.log('len post push', this.currLen);

  //if storage length == 0;
  } else {
    // console.log('pushingn len 0');

    this.storage[0] = val;
    this.currLen++;

    // console.log('storage post push', this.storage);
    // console.log('len post push', this.currLen);
  }
};

stackMethods.pop = function () {
  // console.warn('////////////// POP');
  //do this.pop
  let popped = this.storage[this.currLen - 1];
  // console.log('popped', popped);
  // console.log('storage pre pop', this.storage);
  // console.log('old len', this.currLen);

  delete this.storage[this.currLen - 1];

  this.currLen <= 1 ? this.currLen = 0 : this.currLen--;

  // console.log('new len', this.currLen);
  // console.log('storage post pop', this.storage);

  return popped;
};

stackMethods.size = function () {
  //do this.size
  // console.log('called length', this.currLen);
  return this.currLen;
};