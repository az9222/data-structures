var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.length = 0;

  list.addToTail = function(value) {
    //create a new node
    var newNode = new Node(value);
      //if there is no head then point the head to the node
    if (!this.head) {
      this.head = newNode;
    } 
    //if we have a tail, the next property points to the newNode
    if(this.tail) {
      this.tail.next = newNode
    }
    //the tail now becomes the noewNode
    this.tail = newNode;
    //increment length
    this.length++;
  };

  list.removeHead = function() {
    var currenthead = this.head;
    this.head = this.head.next;
    this.length--;
    return currenthead.value;
  };

  list.contains = function(target) {
    //set a current variable to be the head
    var current = this.head;
    //while there is a current variable
    while (current) {
      //check if the current value is target
      if (current.value === target) {
        //return true
        return true;
      }
      //current then becomes current.next
      current = current.next;
    }
    //return false if it was not found
    return false;
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
