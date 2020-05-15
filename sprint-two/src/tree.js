var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newChild = Tree(value);
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  var result = false;
  var childLookup = function(obj) {
    if (obj !== undefined && obj.length > 0) {
      for(var i = 0; i < obj.length; i++) {
        if (obj[i].value === target) {
          result = true;
        } else if (obj[i].children) {
          childLookup(obj[i].children);
        }
      }
    }
  }
  childLookup(this.children);
  return result;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * Answer: O(n) is the worst case complexity since iteration is required in the contains method.
 */


