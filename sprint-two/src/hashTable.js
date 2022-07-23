

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
  let currIndex = this._storage.get(index);

  //////////////////////////////////////////////////////////////////
  //collisions!!!! loops?
  //when adding two different keys, but get same index

  //if the index is filled, but the key(s) arent the same
  //add new tuple somehow

  //we will need cases for
  //  X    if the index is empty
  //    if the index has tuple in it w/ different key
  //    if the index has tuple in it with same key (COLLISION)
  //                    collision
  //    [    [ [val1, val1], [val2, val2] ]      ]
  //////////////////////////////////////////////////////////////////

  //if there is nothing at current index
  if (!currIndex) {
    //adding tuple to index
    this._storage.set(index, tuple);
  }

  //if the storage at this index has stuff in it
  if (currIndex) {
    //loop over stuff at index
    for (let i = 0; i < currIndex.length; i++) {
      //if we find a matching key
      if (currIndex[i] === k) {
        //replace value of the tuple with the matching key
        currIndex[1] = v;
        return;
      }
    }
    //collisions (all other cases should be handled at this point)
    //we want new array = [[currIndex], [tuple]]
    //if none of the keys match current key (COLLISION)
    //append new tuple to index
    let newArr = [currIndex, tuple];
    this._storage.set(index, newArr);

  }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  let currIndex = this._storage.get(index);
  //if current index is an array of arrays
  if (Array.isArray(currIndex[0])) {
    //we gotta loop and retrieve value based on key
    for (let i = 0; i < currIndex.length; i++) {
      if (currIndex[i][0] === k) {
        return currIndex[i][1];
      }
    }
    //if current index is just an array
  } else {
    //return value
    return this._storage.get(index)[1];
  }



};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //when removing key, make sure to remove entire tuple
  this._storage.set(index, []);

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


