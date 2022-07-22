
// Instantiate a new graph
var Graph = function() {
  // this.something = something;
  this.nodes = {};
  // this.node = node;
  // this.edges = [];

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // console.log(node);
  //using new keyword when making new node
  //need edges property on each node (children) ?
  // let newNode = new Graph(node);
  // console.log(newNode);
  this.nodes[node] = [];
  // console.log(this);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //how do we know that the search wont just circle?
  // console.log(this);
  return this.nodes.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // console.log('TO BE REMOVED', this.nodes[node]);

//if there are edges in the node we are deleting
  if (this.nodes[node].length > 0) {
    // console.log('referenced in node thats being deleted', referenced);
    // console.log(this.nodes[referenced]);
    var referenced = this.nodes[node][0];
    var index = this.nodes[referenced].indexOf(node);
    this.nodes[referenced].splice(index, 1);
  }


  delete this.nodes[node];
  //this must also remove references to this node in other nodes
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.nodes[fromNode].indexOf(toNode) !== -1;

  // if (this.nodes[fromNode].indexOf(toNode) >= 0 &&
  // this.nodes[toNode].indexOf(fromNode) >= 0) {
  //   return true;
  // } else {
  //   return false;
  // }
};

// {node: [edges arr]}

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // if (!fromNode || !toNode) {
  //   return;
  // }
  // console.log('from', fromNode, 'to', toNode);
  //if our graph has both nodes
  this.nodes[fromNode].push(toNode);
  this.nodes[toNode].push(fromNode);

  // console.log('POST ADDING EDGES', this);
  //add other node to each nodes edgles list
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // find indexes of edges
  // after find edges, remove from array

  //index of toNode in fromNodes array
  var toIndex = this.nodes[fromNode].indexOf(toNode);
  //index of fromNode in toNodes array
  var fromIndex = this.nodes[toNode].indexOf(fromNode);
  //
  this.nodes[fromNode].splice(toIndex, 1);
  this.nodes[toNode].splice(fromIndex, 1);

  //
  // console.log('POST REMOVE EDGE', this);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let key in this.nodes) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


