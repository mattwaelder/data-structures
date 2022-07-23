

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

//   limitedArray.set(3, 'hi');
//   limitedArray.get(3); // returns 'hi'


HashTable.prototype.insert = function(k, v) {
  //creating our hash index
  var index = getIndexBelowMaxForKey(k, this._limit);

  console.log('key:', k, 'value:', v, 'index:', index);

  this._storage.set(index, [k, v]);

  //k = steven, v = seagal, index = 3
  //add [steven, seagal] to index 3 of limitedArray
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


