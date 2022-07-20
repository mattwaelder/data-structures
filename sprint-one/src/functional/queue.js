var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var queueLen = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    //putting property at the end of storage
    if (queueLen === 0) {
      // console.log('push w/ len 0');
      storage[0] = value;
      // console.log(storage);
    } else {
      // console.log('push w/ len > 0');
      storage[queueLen] = value;
      // console.log(storage);
    }
    queueLen++;
    // console.log('new queue length', queueLen);
  };



  someInstance.dequeue = function() {
    //removing property from the beginning of storage
    var completedQueue = storage[0];
    delete storage[0];
    // console.log('being removed', completedQueue);
    // console.log('post removal', storage);
    //readjusting all other properties in storage (moving up) ??
    // Object.keys(storage).forEach(function(el) {
    //   el--;
    // });
    for (var [key, value] of Object.entries(storage)) {
      // console.log(key, value);
      storage[key - 1] = value;
      delete storage[queueLen - 1];
      // console.log(key, value);
    }

    queueLen <= 1 ? queueLen = 0 : queueLen--;

    // console.log('storage', storage);
    // console.log('queueLen', queueLen);
    return completedQueue;
  };




  someInstance.size = function() {
    //reading / reporting current size of queue
    return queueLen;

  };

  return someInstance;
};
