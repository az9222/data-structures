var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  var counter = 0;
  list[counter]; //keeps track of length

  list.addToTail = function(value) {
    list.tail = new Node(value);
    counter++; //increments length as we push
  };

  list.removeHead = function() {
    var currenthead = this.head;
    this.head = this.head.next;
    // counter--;
    return currenthead;
  };

  list.contains = function(target) {

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
