var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    count++;
    storage[count] = value;
  };

  someInstance.dequeue = function() {
    count--;
    if (count < 0) {
      count = 0;
    }
    var arr = Object.values(storage);
    return arr.length-1;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
