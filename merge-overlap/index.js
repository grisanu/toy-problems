'use strict';
/** Merge overlapping arrays
* Take 2D array => [[6, 9], [14, 15 ],[7, 10]]
* Return merged => [[6,10],[14,15]]
*
**/

// Logic:
/*
1) Sort by first element in tuple (nlogn)
2) Try to merge each tuple (n)
*/

const mergeOverlap = matrix => {

  // sort by first element in tuple
  matrix.sort((a, b) => (a[0] - b[0]));

  let tuple = 0;
  while (tuple < matrix.length-1) {
    let next = tuple + 1;
    let merged = true;
    while (merged) {
      // checking to see if can merge `next` to `tuple`
      if (matrix[tuple][1] >= matrix[next][0]) {

        // merge back to tuple
        if (matrix[tuple][1] < matrix[next][1]) {
          matrix[tuple][1] = matrix[next][1];
        }

        // already merged to splice off
        matrix.splice(next, 1);

        // exit if end
        merged = next > matrix.length - 1 ? false : true;
      } else {
        merged = false;
      }
    }
    tuple++;
  }


  return matrix;
};

console.log(mergeOverlap([[6,9], [14,15], [7,10]]));
console.log(mergeOverlap([[6,8], [1,9], [2,4], [4,7]]));
