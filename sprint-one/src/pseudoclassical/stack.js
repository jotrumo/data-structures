var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage ={};
  this.keyNum = 0;
  this.sizeObj = 0;
};


Stack.prototype.push = function(value) {
    this.storage[this.keyNum] = value;
    this.keyNum++;
    this.sizeObj++;
};

Stack.prototype.pop = function() {
    if (this.sizeObj > 0) {
      this.keyNum--;
      var result = this.storage[this.keyNum];
      delete this.storage[this.keyNum];
      this.sizeObj--;
    }
    return result;
};

Stack.prototype.size = function() {
    return this.sizeObj;
};








