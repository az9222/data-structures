var Stack = function() {
  var obj = {};
  obj.storage = {};
  obj.count = 0;
  extend(obj, stackMethods);
  return obj;
}

var extend = function(obj, methods) {
  for (var key in methods) {
    obj[key] = methods[key];
  }
}

var stackMethods = {
  push: function(value) {
    this.count++;
    this.storage[this.count] = value;
  },

  pop: function() {
    this.count--;
    if (this.count < 0) {
      this.count = 0;
    }
    var arr = Object.values(this.storage);
    return arr[this.count];
  },

  size: function() {
    return this.count;
  }
};


