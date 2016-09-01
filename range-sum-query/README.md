#Range-Sum-Query

## Problem
Given an integer array `nums`, find the sum of the elements between indices `i` and `j` (`i ≤ j`), inclusive.

The `update(i, val)` function modifies nums by updating the element at index `i` to `val`.
Example:

```
Given nums = [1, 3, 5]

sumRange(0, 2) -> 9
update(1, 2)
sumRange(0, 2) -> 8
```
Note:

* The array is only modifiable by the update function.
* You may assume the number of calls to `update` and `sumRange` function is distributed evenly.


##Solution

### Approach #1 Naive Solution

#### Description

Iterate over each element of the array from `i` to `j` to sum each element.

#### Time Complexity
* update - O(1)
* sumRange - O(n)


### Approach #2 Segment Tree
(https://leetcode.com/articles/range-sum-query-mutable/#approach-1-naive-time-limit-exceeded)

#### Description

#### Time Complexity

### Approach #3 Binary Indexed Tree

(https://discuss.leetcode.com/topic/31599/java-using-binary-indexed-tree-with-clear-explanation)