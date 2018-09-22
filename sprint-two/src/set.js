var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; 
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  //loop through set properties
  for (var key in this.set) {
    //if the set does not contain the item, add the item
    if (this.set.key === undefined) {
      this.set[key] = item;
    }
  }
  //return the set
  return set;
};

setPrototype.contains = function(item) {
};

setPrototype.remove = function(item) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
