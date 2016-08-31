/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.numArray = nums;
};

/**
 * @param {number} i
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(i, val) {
  this.numArray[i] = val;
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  var sum = 0;
  for (var index = i; index < j+1; index++) {
    sum += this.numArray[index];
  }
  return sum;
};


/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.update(1, 10);
 * numArray.sumRange(0, 2);
 */