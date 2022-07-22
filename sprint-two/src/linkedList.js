var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.previousNode;
  // list.count = 0;

  list.addToTail = function(value) {
    //make a new node with passed in value
    let newNode = new Node(value);
    let currentNode = newNode;

    // if linked list is empty
    if (!list.head) {
      //set both head and tail to the new node
      list.head = currentNode;
      list.tail = currentNode;

      //set a varaible to keep track of the last node put in
      previousNode = currentNode;

    // if linked list is NOT empty
    } else {
      //set current node to be the new tail;
      list.tail = currentNode;
      //set the previous nodes.next value to be current node;
      previousNode.next = currentNode;

      /////
      //i dont think previous node is a good name, here, since we're only setting it when we add a head... ?
      /////
    }
  };


  list.removeHead = function() {
    //make head point to current heads .next
    var previousHead = list.head;
    list.head = list.head.next;
    return previousHead.value;
  };

  list.contains = function(target, currentNode) {
    currentNode = currentNode || list.head;
    //while there is a next value
    // var confirm = false;

    // while (currentNode.next) {
    // let head = list.head;
    // let currentNode;
    // let nextNode = currentNode.next;


    if (currentNode.value === target) {
      //should set previous EC to true, and output to true;
      return true;
    }

    //recursively calling next item in linked list
    if (currentNode.next) {
      var output = list.contains(target, currentNode.next);
    }

    //if output gets to be true, return true;
    if (output) {
      return true;
    //else return false;
    } else {
      return false;
    }



    //check to see if current node value matches target
    //if current node value doesnt equal target
    //check current nodes .next
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  //points to next node
  node.next = null;

  // list.addToTail(value);

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
