var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    count++;
    return value;
  };

  someInstance.pop = function() {
    count--;
    if (count < 0) {
      count = 0;;
    }
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
