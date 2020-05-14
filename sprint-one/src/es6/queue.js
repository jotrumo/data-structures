class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.sizeObj = 0;
    this.enqueueNumKey = 0;
    this.dequeueNumKey = 0;
  }

  enqueue(value) {
    this.storage[this.enqueueNumKey] = value;
    this.enqueueNumKey++;
    this.sizeObj++;
  };

  dequeue() {
    if (this.sizeObj > 0) {
      var result = this.storage[this.dequeueNumKey];
      delete this.storage[this.dequeueNumKey];
      this.dequeueNumKey++;
      this.sizeObj--;
    }
    return result;
  };

  size() {
    return this.sizeObj;
  };

}










