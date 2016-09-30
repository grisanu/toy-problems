const reverse = linkedlist => {
  let currNode = linkedlist.head;
  let prevNode = null;
  let tmp;

  while (currNode !== null) {
    tmp = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = tmp;
  }

  // reverse head and tail
  tmp = linkedlist.head;
  linkedlist.head = linkedlist.tail;
  linkedlist.tail = tmp;

  return linkedlist;
};

/**************************************************************************************************/
var LinkedList = function(){
  //fill me in!
  this.tail = null;
  this.head = null;
};

//write methods here!

LinkedList.prototype.addToTail = function(v){
  if (this.tail === null && this.head === null) {
    this.head = {value: v, next: null};
    this.tail = this.head;
  } else {
    var newTail = {value: v, next: null}
    this.tail.next = newTail;
    this.tail = newTail;
  }
};

LinkedList.prototype.removeHead = function(){
  var v = this.head.value;
  if (this.head.next === null) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = this.head.next;
  }
  return v;
};

LinkedList.prototype.contains = function(target){
  var v = this.head.value;
  var n = this.head.next;

  while (v !== null) {
    if (v === target) {
      return true;
    } else if (n === null) {
      return false;
    } else {
      v = n.value;
      n = n.next;
    }
  }
  return false;
};

LinkedList.prototype.makeNode = function(v){
  return {value: v, next: null};
};

var aa = new LinkedList();
aa.addToTail(1);
aa.addToTail(2);
aa.addToTail(3);
aa.addToTail(4);
aa.addToTail(5);
aa.addToTail(6);
console.log(aa);
/**************************************************************************************************/

console.log(reverse(aa));