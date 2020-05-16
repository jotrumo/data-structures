var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
  if(Object.keys(this._storage).indexOf(item) > -1) {
    return true;
  } else{
    return false;
  }
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 * Answer: Constant time complexity - worse case scenerio.
 */
