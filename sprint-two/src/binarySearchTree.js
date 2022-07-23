class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = undefined;
    this.right = undefined;
  }

  insert(input) {
    // console.log('current input', input);
    //if first item, set as top

    //if both L / R are undefined, its head
    // if (input < this.)
    var current = current || this;
    // console.log('current', current);
    // if item is less than current node
    if (input < this.value) {
      // if left is undefined
      if (current.left === undefined) {
        // insert a value for left property
        current.left = new BinarySearchTree(input);
      } else {
        // else recursion
        current.left.insert(input);
      }
      // if item is more than current node
    } else if (input > this.value) {
      // if right is undefined
      if (current.right === undefined) {
        // insert a value for right property
        current.right = new BinarySearchTree(input);
      } else {
        // else recursion
        current.right.insert(input);
      }
    }
  }

  contains(input) {
    //recursively look through all the branches in the tree

    // return this value once recursion done
    var isContained = false;

    let searchNodes = function (node) {

      // console.log('PASSED IN:', node);

      if (node.value === input) {
        // console.log('NODE FOUND', node.value);
        isContained = true;
        return;
      } else {
        //check to see if node is bigger than current node
        if ((input > node.value) && node.right !== undefined) {
          searchNodes(node.right);
        } else if ((input < node.value) && node.left !== undefined) {
          searchNodes(node.left);
        }
      }
    };

    searchNodes(this);
    return isContained;
  }

  depthFirstLog(callback) {
    //perform a fn on every val in our binary tree
    //start at top

    callback(this.value);
    //if it has no children
    if (this.left) {
      this.left.depthFirstLog(callback);
    }
    if (this.right) {
      this.right.depthFirstLog(callback);
    }
    //apply our cb to that node
    //if it does have children
    //recursively call children
    return this;
  }
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
