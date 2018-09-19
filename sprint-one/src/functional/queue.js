var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var removalCount = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    count++;
    storage[count] = value;
    var arr = Object.values(storage);
    return arr[count];
  };

  someInstance.dequeue = function() {
    if (count < 0) {
      count = 0;
    }
    var arr = Object.values(storage);
    var returnValue = arr[removalCount];
    removalCount++;
    return returnValue
  };

  someInstance.size = function() {
    if (removalCount > count) {
      return 0;
    }
    return count - removalCount;
  };

  return someInstance;
};

// it('reports a size of 1 after adding two items and removing one', function() {
//   queue.enqueue('a');
//   queue.enqueue('b');
//   queue.dequeue();
//   expect(queue.size()).to.equal(1);
// });

// it('reports a size of 0 after removing more items than were added', function() {
//   queue.enqueue('a');
//   queue.dequeue();
//   queue.dequeue();
//   expect(queue.size()).to.equal(0);
// });

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
