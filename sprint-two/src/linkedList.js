var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.length = 0;

  var counter = 0;
  list[counter]; //keeps track of length

  list.addToTail = function(value) {
    this.tail = new Node(value);
    // counter++; //increments length as we push
    this.length++;
    return this;
  };

  list.removeHead = function() {
    var currenthead = this.head;
    this.head = this.head.next;
    this.length--;
    return currenthead;
    
    //maybe: if there are no nodes return und
    //store current head property in variable
    //set head property to be current heads next property
    //decrement length by 1
    //return removed ndoe
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
