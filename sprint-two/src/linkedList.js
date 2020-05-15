var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  var previousNode = null;

  list.addToTail = function(value) {
    var nodeObj = new Node(value);

    //if list.head === null, do
    if (list.head === null) {
      //set nodeObj to list.head
      list.head = nodeObj;
      list.tail = nodeObj;
      previousNode = nodeObj;
      // console.log("PreviousNode :", previousNode);

    } else if (list.head) {

      previousNode.next = nodeObj;
      // console.log('SecondNode: ', previousNode);
      previousNode = nodeObj
      list.tail = nodeObj;
    }
  };

  list.removeHead = function() {
    if (list.head) {
      var result = list.head.value;
      // console.log("result :", result);
      list.head = list.head.next;
    }

    return result;
  };

  list.contains = function(target) {
    var result;

    var checkNext = function(obj) {
      if (obj.value === target) {
        result = true;

      } else if (obj.next !== null) {
        checkNext(obj.next);

      } else {
        result = false;
      }
    };

    checkNext(list.head);

    return result;
  }

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 O(n) is the worse case time complexity since we have to recursively iterate through each linked object in order to find the target value.
 */