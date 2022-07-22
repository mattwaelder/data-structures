var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = []; // fix me

  _.extend(newTree, treeMethods);

  return newTree;
};

// newTree = {value: value, children: [ {value: value, children: [{}, {}, {}]} ]

var treeMethods = {};

treeMethods.addChild = function(value) {
  //create new tree
  let newChild = new Tree(value);
  //add the new tree into children array
  this.children.push(newChild);
  // console.log(this);
  // console.log('POST CHILD ADD:', newChild);
};

treeMethods.contains = function(target, currentNode) {
  console.warn('/////////CONTAINS CALL//////////');
  currentNode = currentNode || this;
  console.log('PASSED IN: ', currentNode);

  var result = false;

  if (currentNode.value === target) {
    // console.log(currentNode.value);
    // console.log('HAD VALUE, RETURNING TRUE');
    result = true;
  }

  // if (currentNode.children.length === 0) {
  //   if (currentNode.value !== target) {
  //     return;
  //   }
  // }
  // // if (currentNode.children.length === 0 && currentNode.value !== target) {
  // //   console.log('looking for', target);
  // //   console.log(currentNode.children.length, currentNode.value);
  // //   console.log('NO CHILDREN, WRONG VALUE, VERY BAD');
  // //   return;
  // // }

  if (currentNode.children.length !== 0) {
    console.log('RECURSIVE CALL');
    for (let i = 0; i < currentNode.children.length; i++) {
      var currentChild = currentNode.children[i];
      var hasNode = this.contains(target, currentChild);

      if (hasNode) {
        result = true;
      }
    }
  }


  //   console.warn('ENDING FUNCTION CALL');
  //   if (hasNode) {
  //     return true;
  //   } else {
  //     return false;
  //   }


  return result;


  //if current nodes value != target &&
  //if node has children
  //recursively call children array
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
