var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[count] = value; //{0: 'a', 1: 'b', 2: 'c'}
    count++;
  };

  someInstance.pop = function() {
    count--;
    if (count < 0) {
      count = 0;;
    }
    var returnValue = storage[count];
    delete storage[count];
    return returnValue;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};

//already been added and removed', function() {
//     stack.push('a');
//     stack.push('b');
//     stack.push('c');
//     stack.pop();
//     expect(stack.pop()).to.equal('b');
//   });
// });

// stack.push('a');
//         expect(stack.pop()).to.equal('a');
//         stack.push('b');
//         expect(stack.pop()).to.equal('b');