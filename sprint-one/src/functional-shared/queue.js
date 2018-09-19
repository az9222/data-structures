var Queue = function() {
  var obj = {};
  obj.storage = {};
  obj.enqueueCount = 0;
  obj.dequeueCount = 0;
  extend(obj, queueMethods);
  return obj;
}

var extend = function(obj, methods) {
  for (var key in methods) {
    obj[key] = methods[key];
  }
}

var queueMethods = {
  enqueue: function(value){
    this.enqueueCount++;
    this.storage[this.enqueueCount] = value;
    let arr = Object.values(this.storage);
    return arr[this.enqueueCount];
  },

  dequeue: function() {
     if (this.enqueueCount < 0) {
      count = 0;
    }
    var arr = Object.values(this.storage);
    var returnValue = arr[this.dequeueCount];
    this.dequeueCount++;
    return returnValue
  },

  size: function(){
    if (this.dequeueCount > this.enqueueCount) {
      return 0;
    }
    return this.enqueueCount - this.dequeueCount;
  }
};

// queue.enqueue('a');
// queue.enqueue('b');
// queue.dequeue();
// queue.enqueue('c');
// expect(queue.dequeue()).to.equal('b');