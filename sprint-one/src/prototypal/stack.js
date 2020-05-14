var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage ={};
  someInstance.keyNum = 0;
  someInstance.sizeObj = 0;
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.keyNum] = value;
    this.keyNum++;
    this.sizeObj++;
  },

  pop: function() {
    if (this.sizeObj > 0) {
      this.keyNum--;
      var result = this.storage[this.keyNum];
      delete this.storage[this.keyNum];
      this.sizeObj--;
    }
    return result;
  },

  size: function() {
    return this.sizeObj;
  }
};







