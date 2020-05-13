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
  var num = 0;
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[num] = value;
    num = num + 1;
    size = size + 1;
    console.log(storage);
  };

  someInstance.dequeue = function() {
    var result = storage['0'];
    delete storage['0'];
    for (var key in storage) {
      console.log(key);

    }

    return result;
  };

  someInstance.size = function() {
    return size;
  };


  return someInstance;
};


var queue = new Queue();

queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');
queue.dequeue();