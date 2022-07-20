var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var currLen = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    //if there is storage
    if (currLen > 0) {
      // console.log('current len > 0 adding', value);
      storage[currLen] = value;
      // console.log(storage);

      currLen++;
      // console.log(currLen);
    } else {
    //if storage is empty
      // console.log('current len 0 adding', value);
      storage[0] = value;
      // console.log(storage);

      currLen++;
      // console.log(currLen);
    }
  };

  someInstance.pop = function() {
    //temp storage for popped value
    let popped = storage[currLen - 1];


    // console.log(storage);
    // console.log('currLen:', currLen);
    // console.log('popped', popped);


    //now safe to remove actual value at top
    delete storage[currLen - 1];
    //reduce length variable (but not less than 0)
    // currLen <= 1 ? currLen = 0 : currLen--;
    if (currLen <= 1) {
      currLen = 0;
    } else {
      currLen --;
    }
    //return popped value;
    return popped;
    // return storage[currLen];
  };

  someInstance.size = function() {
    return currLen;
  };

  return someInstance;
};



