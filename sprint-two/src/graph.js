

// Instantiate a new graph
var Graph = function() {
    this.adjacencyList = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
    if (!this.adjacencyList[node]) {
        this.adjacencyList[node] = [];
    }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
    return this.adjacencyList.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
    //delete this.adjacencyList[node] which is the node we want to delete
    delete this.adjacencyList[node];
    //call removeEdge
    this.removeEdge(node);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
    if (this.adjacencyList[fromNode].includes(toNode) && 
    this.adjacencyList[toNode].includes(fromNode)) {
        return true
    } else {
        return false;
    }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
    this.adjacencyList[fromNode].push(toNode);
    this.adjacencyList[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
    this.adjacencyList[fromNode] = this.adjacencyList[fromNode].filter(function(element){return element !== toNode});
    this.adjacencyList[toNode] = this.adjacencyList[toNode].filter(function(element){return element !== fromNode});
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


