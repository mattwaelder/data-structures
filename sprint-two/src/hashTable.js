

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);

};

//   limitedArray.set(3, 'hi');
//   limitedArray.get(3); // returns 'hi'

// { [], [], [[k,v]], [], [], [] }
//    1   2     3      4


HashTable.prototype.insert = function(k, v) {
  // grab index and check if result is equal to an array, push in tuples to array
  // else, create sub array, and push in value
  var index = getIndexBelowMaxForKey(k, this._limit);
  //making new tuple
  let tuple = [k, v];
  // console.log('our touple:', tuple);
  // console.log('our index:', index);
  var currIndex = this._storage.get(index);
  // console.log('CURRENT INDEX', currIndex);

  //////////////////////////////////////////////////////////////////
  //collisions!!!! loops?
  //when adding two different keys, but get same index
  //if the index is filled, but the key(s) arent the same
  //add new tuple somehow

  //we will need cases for
  //if the index is empty
  //if the index has tuple in it w/ different key
  //if the index has tuple in it with same key (COLLISION)
  //                    collision
  //    [    [ [val1, val1], [val2, val2] ]      ]
  //////////////////////////////////////////////////////////////////

  //if there is nothing at current index
  if (!currIndex) {
    console.log('nothing at index, ADDING');
    //adding tuple to index
    this._storage.set(index, tuple);
  } else {
    //this will no longer suffice.......
    this._storage.set(index, [k, v]);
  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  return this._storage.get(index)[1];

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //when removing key, make sure to remove entire tuple
  this._storage.set(index, []);

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


