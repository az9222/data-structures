var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var arr = Object.values(storage);

  // Implement the methods below
  someInstance.push = function(value) {
    count++;
  };

  someInstance.pop = function() {
    count--;
    if (count < 0) {
      count = 0;;
    }
    return arr[arr.length-1];
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};

// it('allows sequentially additing and removing items', function() {
//   stack.push('a');
//   expect(stack.pop()).to.equal('a');
//   stack.push('b');
//   expect(stack.pop()).to.equal('b');
// });

// describe('stack-specific behavior', function() {
//   it('removes the most recently added of two items', function() {
//     stack.push('a');
//     stack.push('b');
//     expect(stack.pop()).to.equal('b');
//   });
//   it('removes the newest item, after newer items have already been added and removed', function() {
//     stack.push('a');
//     stack.push('b');
//     stack.push('c');
//     stack.pop();
//     expect(stack.pop()).to.equal('b');
//   });
// });