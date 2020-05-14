class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage ={};
    this.keyNum = 0;
    this.sizeObj = 0;
  }


  push(value) {
      this.storage[this.keyNum] = value;
      this.keyNum++;
      this.sizeObj++;
  };

  pop() {
      if (this.sizeObj > 0) {
        this.keyNum--;
        var result = this.storage[this.keyNum];
        delete this.storage[this.keyNum];
        this.sizeObj--;
      }
      return result;
  };

  size() {
      return this.sizeObj;
  };
}








