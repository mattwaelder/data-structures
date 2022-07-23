var Set = function() {
  var set = Object.create(setPrototype);
  //this.whatever = whatever
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // console.log(item);
  this._storage.push(item);
};

setPrototype.contains = function(item) {
  return this._storage.indexOf(item) >= 0;
};

setPrototype.remove = function(item) {
  var toDelete = this._storage.indexOf(item);
  this._storage.splice(toDelete, 1);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
