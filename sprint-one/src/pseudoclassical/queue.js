var Queue = function() {
  this.obj = {};
  this.storage = {};
  this.count = 0;
  this.removeCount = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Queue.prototype.dequeue = function() {
  var returnedValue = this.storage[this.removeCount];
  delete this.storage[this.removeCount];
  this.removeCount++;
  return returnedValue;
};

Queue.prototype.size = function() {
  if (this.removeCount > this.count) {
    return 0;
  }
  return this.count - this.removeCount;
};




