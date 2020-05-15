var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  // your code here

  // newTree.children = {};  // fixed null value by adding empty object
  newTree.children = []; // What if we make this into an array instead?
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
//takes any value, sets that as the target of a node and adds that node as a child of the tree
  var newChild = Tree(value);
  this.children.push(newChild); // Push into the array instead of adding to an object?
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
// method, takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node



var test = Tree(5);
console.log(test);
test.addChild(6);
test.addChild(6);
test.addChild(6);
console.log("children :", test.children);



/*
 * Complexity: What is the time complexity of the above functions?
 */


