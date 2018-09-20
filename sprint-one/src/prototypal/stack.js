var Stack = function() {
  var obj = Object.create(stackMethods);
  obj.storage = {};
  obj.count = 0;
  return obj;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

stackMethods.pop = function() {
  this.count--;
  if (this.count < 0) {
    this.count = 0;
  }
  var returnedValue = this.storage[this.count];
  delete this.storage[this.count];
  return returnedValue;
}

stackMethods.size = function () {
  return this.count;
}
 

