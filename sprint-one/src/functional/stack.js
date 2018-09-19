var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    count++;
    storage[count] = value; //{1: 'one', 2: 'two', 3: 'three'}
  };

  someInstance.pop = function() {
    count--;
    if (count < 0) {
      count = 0;;
    }

      var arr = Object.values(storage);
      return arr[arr.length-1]
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