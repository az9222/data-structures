var Queue = function() {
  var obj = Object.create(queueMethods);
  obj.storage = {};
  obj.count = 0;
  obj.removeCount = 0;
  return obj;
};

var queueMethods = {
  enqueue: function(value) {
    this.count++;
    this.storage[this.count] = value;
    let arr = Object.values(this.storage);
    return arr[this.count];
  },

  dequeue: function() {

  },

  size: function(){

  }
};


