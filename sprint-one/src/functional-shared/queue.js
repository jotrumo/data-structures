var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.sizeObj = 0;
  someInstance.enqueueNumKey = 0;
  someInstance.dequeueNumKey = 0;
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {

  enqueue: function(value) {
    this.storage[this.enqueueNumKey] = value;
    this.enqueueNumKey++;
    this.sizeObj++;
  },

  dequeue: function() {
    if (this.sizeObj > 0) {
      var result = this.storage[this.dequeueNumKey];
      delete this.storage[this.dequeueNumKey];
      this.dequeueNumKey++;
      this.sizeObj--;
    }
    return result;
  },

  size: function() {
    return this.sizeObj;
  }
};








