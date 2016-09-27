/**
* Constructor to create a binary search tree
* LEFT is LESS than root
* RIGHT is MORE than root
*
*/

const BST = function (root) {
  this.value = root;
  this.left = null;
  this.right = null;
};

const Node = function (value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BST.prototype.addChild = function (value) {
  // cannot add duplicate
};

BST.prototype.removeChild = function (value) {

};