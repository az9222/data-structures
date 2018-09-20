var Queue = function() {
  var obj = Object.create(queueMethods);
  obj.storage = {};
  obj.count = 0;
  obj.removeCount = 0;
  return obj;
};

var queueMethods = {}; //or prototype, which is a built in function

queueMethods.enqueue = function(value) {
    this.storage[this.count] = value;
    this.count++;
},

queueMethods.dequeue = function() {
    var value = this.storage[this.removeCount];
    delete this.storage[this.removeCount];
    this.removeCount++;
    return value;
},

queueMethods.size = function() {
    if (this.removeCount > this.count) {
      return 0;
    }
    return this.count-this.removeCount;
}



