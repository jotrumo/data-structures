var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var keyNum = 0;
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[keyNum] = value;
    keyNum++;
    size++;

  };

  someInstance.pop = function() {
    if (size > 0) {
      keyNum--;
      var result = storage[keyNum];
      delete storage[keyNum];
      size--;
    }
    return result;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
