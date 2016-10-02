/**
 * Given an array of integers that is already sorted in ascending order,
 * find two numbers such that they add up to a specific target number.
 *
 * The function twoSum should return indices of the two numbers such
 * that they add up to the target, where index1 must be less than index2.
 *
 * Please note that your returned answers (both index1 and index2) are not zero-based.
 *
 * You may assume that each input would have exactly one solution.
 *
 * Input: numbers={2, 7, 11, 15}, target=9
 * Output: index1=1, index2=2
**/

const twoSum = (arr, target) => {
  // Solution 1
  // loop through array
    // use binary search to find number that will add to target
  const binarySearch = (arr, target, start=0, end=arr.length) => {
    const mid = Math.floor((end - start)/2) + start;

    if (mid === start) {
      return target === arr[mid] ? start : false;
    }

    if (target === arr[mid]) {
      return mid;
    } else if (target > arr[mid]) {
      return binarySearch(arr, target, mid+1, end+1);
    } else {
      return binarySearch(arr, target, start, mid);
    }
  };

  for (let i = 0; i < arr.length; i++) {
    let found = binarySearch(arr, target-arr[i], i+1);
    found = found === false ? false : found + 1;

    if (found) {
      return [i+1, found];
    }
  }
  // Solution 2
  // loop through array
    // put everything in hash table
    // use hash table lookup to find
};

console.log(twoSum([2,7,11,15], 17))