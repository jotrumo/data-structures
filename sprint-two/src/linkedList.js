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
      console.log("PreviousNode :", previousNode);

    } else if (list.head) {

      previousNode.next = nodeObj;
      console.log('SecondNode: ', previousNode);
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


  }
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

var test = LinkedList();

test.addToTail(5);
test.addToTail(6);
console.log(test);

/*
 * Complexity: What is the time complexity of the above functions?
 */