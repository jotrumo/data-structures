var BinarySearchTree = function(value) {
  var tree = {};
  tree.value = value
  tree.left = null;
  tree.right = null;


  tree.insert = function(value) {

    if (this.value > value) {
      if (this.left === null) {
        this.left = BinarySearchTree(value)
      } else {
        this.left.insert(value)
      }
    } else if (this.value < value) {
      if (this.right === null) {
       this.right = BinarySearchTree(value)
      } else {
        this.right.insert(value)
      }
    }
  }

  tree.contains = function(target) {
    if (target === this.value) {
      return true;
    } else if (target < this.value) {
      return !!(this.left && this.left.contains(target));
    } else if (target > this.value) {
      return !!(this.right && this.right.contains(target));
    }
  };

  tree.depthFirstLog = function(cb) {
    cb(this.value);
    if (this.left) {
      this.left.depthFirstLog(cb);
    }
    if (this.right) {
      this.right.depthFirstLog(cb);
    }
  };
  return tree;
};



/*
 * Complexity: What is the time complexity of the above functions
 * Answer O(n) Linear complexity
 */
