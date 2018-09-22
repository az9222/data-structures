

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
    //while there the array of the node we want to delete has elements
    while (this.adjacencyList[node].length > 0) { 
        //pop element and save the popped element in const variable
        const popped = this.adjacencyList[node].pop();
        //call removeEdge on the popped element and the node
        this.removeEdge(popped,node);
    }
    //delete the node 
    delete this.adjacencyList[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
    console.log(true)
    if (this.adjacencyList[fromNode].includes(toNode)) {
        console.log(true)
        return true;
    } else {
        return false;
    }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
    console.log(fromNode, toNode)
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
    //loop through the object
    for (var prop in this.adjacencyList) {
        //apply the callback to each prop
        console.log(prop)
        cb(prop);
    }
};

/*
{ 1: [2]
  2: [1]
}
*/

/*
 * Complexity: What is the time complexity of the above functions?
 */


