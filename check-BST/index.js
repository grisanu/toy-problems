'use strict';

/****************************************************************************************************/

const BST = function (root) {
  this.value = root;
  this.left = null;
  this.right = null;
};

BST.prototype.addChild = function (value) {
  if (this.value === value) {
    // cannot add duplicate
    return;
  } else if (this.value > value) {
    if (this.left === null) {
      this.left = new BST(value);
    } else {
      this.left.addChild(value);
    }
  } else {
    if (this.right === null) {
      this.right = new BST(value);
    } else {
      this.right.addChild(value);
    }
  }
};

BST.prototype.removeChild = function (value) {
  if (this.value === value) {
    return true;
  } else if (this.value < value) {
    if (this.left === null) {
      return false;
    } else if (this.left.removeChild(value)) {
      this.left = null;
    }
  } else {
    if (this.right === null) {

    } else if (this.right.removeChild(value)){
      this.right = null;
    }
  }
};

const aa = new BST(10);
aa.addChild(6);
aa.addChild(11);
aa.addChild(3);
aa.addChild(1);
aa.addChild(20);
aa.addChild(13);
aa.addChild(16);
aa.addChild(8);

/****************************************************************************************************/

const checkBST = root => {
  const values = [];

  const innerRecurse = node => {
    if (node !== null) {
      innerRecurse(node.left);
      values.push(node.value);
      innerRecurse(node.right);
    }
  };

  const checkifSorted = arr => {
    return arr.reduce((acc, curr, i) => {
      if (i === arr.length -1) {
        return acc;
      }

      return acc && (curr < arr[i+1]);
    }, true);
  };

  innerRecurse(root);
  console.log(values);
  return checkifSorted(values);
};

console.log(checkBST(aa));