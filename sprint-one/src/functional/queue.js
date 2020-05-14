// Do:
// Work within the src/functional/ folder
// Define all functions and properties within the maker function
// Don't:
// Use the keyword new, the keyword this, or any prototype chains
// Capitalize the maker function name
// Example: The provided classes Stack and Queue already follow this pattern

var Queue = function() {

  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var enqueueNumKey = 0;
  var dequeueNumKey = 0;
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[enqueueNumKey] = value;
    enqueueNumKey++;
    size++;
    console.log(storage);
  };

  someInstance.dequeue = function() {
    if (size > 0) {
      var result = storage[dequeueNumKey];
      delete storage[dequeueNumKey];
      dequeueNumKey++;
      size--;
    }
    return result;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};

