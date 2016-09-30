/**
* Find the maximum depth of a BST
*
*/

const findMaxDepth = root => {
  let firstQ = [root];
  let secondQ = [];
  let depth = 0;

  while (firstQ.length > 0) {
    firstQ.forEach(node => {
      if (node.left !== null) {
        secondQ.push(node.left);
      }

      if (node.right !== null) {
        secondQ.push(node.right);
      }
    });

    if (secondQ.length === 0) {
      return depth;
    }

    firstQ = secondQ;
    secondQ = [];
    depth++;
  }
};


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
aa.addChild(20);
aa.addChild(13);
aa.addChild(16);
aa.addChild(8);

/****************************************************************************************************/

console.log(findMaxDepth(aa));