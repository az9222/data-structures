var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    count++;
    storage[count] = value;
    var arr = Object.values(storage);
    return arr[count];
  };

  someInstance.dequeue = function() {
    count--;
    if (count < 0) {
      count = 0;
    }
    var arr = Object.values(storage);
    return arr[count];
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};

// describe('queue-specific behavior', function() {
//   it('removes the least recently added of two items', function() {
//     queue.enqueue('a');
//     queue.enqueue('b');
//     expect(queue.dequeue()).to.equal('a');
//   });

//   it('removes the oldest item, after newer items have already been added and removed', function() {
//     queue.enqueue('a');
//     queue.enqueue('b');
//     queue.dequeue();
//     queue.enqueue('c');
//     expect(queue.dequeue()).to.equal('b');
//   });
// });