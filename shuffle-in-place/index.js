'use strict';
/**
* Shuffle an array in place
* Time complexity = O(n)
* Space complexity = O(1)
**/

const shuffle = array => {
  // function to swap 2 values in an array
  const swap = (arr, a, b) => {
    let tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
  };

  for (let i = 0; i < array.length; i++) {
    console.log(array.length -i);
    let swapIndex = Math.floor(Math.random()*(array.length - i)) + i;

    swap(array, i, swapIndex);
  }

  return array;
};

console.log(shuffle([1,2,3,4,5,6,7,8,9,10]));