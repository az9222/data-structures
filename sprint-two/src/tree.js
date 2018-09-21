var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = []; 
  extend(newTree, treeMethods); 
  return newTree;
};

function extend (obj, objMethods) {
  for (var key in objMethods) {
    obj[key] = objMethods[key];
  }
}

var treeMethods = {};

treeMethods.addChild = function(value) {
  //create a new tree
  var tree = new Tree(value);
  //push it to the children array
  this.children.push(tree);
};

treeMethods.contains = function(target) {
  var containsTarget = false;
  function recurse(tree, target) {
    //if root (this.value) equals to target returns true
    if (tree.value === target) {
      containsTarget = true;
      return containsTarget;
    } else {
    //if not, for loop through the children to see if children value equals to target
      for (var i = 0; i < tree.children.length; i++) {
        //if children value match target, return true
        var child = tree.children[i]
        recurse(child, target);
      }
    }
  }
  recurse(this, target);
  return containsTarget;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
