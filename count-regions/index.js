'use strict';
/** Take a board and count # of connected 'O'
*
* [
*   ['X', 'X', 'X', 'X'],
*   ['X', 'O', 'O', 'X'],
*   ['X', 'X', 'O', 'X'],
*   ['X', 'O', 'X', 'X']
* ]
* ==> 2
*/

const countRegion = (board) => {
  let count = 0;
  const counted = {};

  const markGroup = (row, col) => {
    if (row > -1 && col > -1 &&
        row < board.length && col < board[0].length &&
        board[row][col] === 'O' &&
        !counted[row.toString() + col.toString()]) {
      counted[row.toString() + col.toString()] = true;

      markGroup(row +1, col);
      markGroup(row -1, col);
      markGroup(row, col +1);
      markGroup(row, col -1);
    }
  };

  board.forEach((row, i) => {
    row.forEach((col, j) => {
      if (col === 'O' && !counted[i.toString() + j.toString()]) {
        count++;
        markGroup(i, j);
      }
    });
  });

  return count;
};

console.log(countRegion(
[
  ['O', 'X', 'X', 'O'],
  ['X', 'O', 'X', 'X'],
  ['X', 'X', 'O', 'X'],
  ['X', 'O', 'X', 'O']
]
)); // 6