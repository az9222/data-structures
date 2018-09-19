var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    count++;
  };

  someInstance.dequeue = function() {
    count--;
    if (count < 0) {
      return count;
    }
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
