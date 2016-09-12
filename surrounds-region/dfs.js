/**
 * Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.
 *
 * A region is captured by flipping all 'O's into 'X's in that surrounded region.
 *
 * For example,
 * X X X X
 * X O O X
 * X X O X
 * X O X X
 * After running your function, the board should be:
 *
 * X X X X
 * X X X X
 * X X X X
 * X O X X
*/

const captureRegion = (board) => {
  const lastRowIndex = board.length -1;
  const lastColumnIndex = board[0].length -1;

  // take row and col => determines whether the group of 'O' touches the boundary
  const hasPathOut = (rowIndex, colIndex, path) => {
    if (board[rowIndex][colIndex] === 'X' || path[rowIndex.toString() + colIndex.toString()]) {
      return false;
    } else if (rowIndex === 0 || colIndex === 0 || rowIndex === lastRowIndex || colIndex === lastColumnIndex) {
      return true;
    } else {
      path[rowIndex.toString() + colIndex.toString()] = true;
      return hasPathOut(rowIndex +1, colIndex, path) ||
             hasPathOut(rowIndex -1, colIndex, path) ||
             hasPathOut(rowIndex, colIndex +1, path) ||
             hasPathOut(rowIndex, colIndex -1, path);
    }
  };

  board.forEach((rowElement, rowIndex) => {
    rowElement.forEach((element, colIndex) => {
      if (element === 'O' && !hasPathOut(rowIndex, colIndex, {})) {
        board[rowIndex][colIndex] = 'X';
      }
    });
  });
  return board;
};

console.log(captureRegion([
  ['X', 'X', 'X', 'X'],
  ['X', 'O', 'O', 'X'],
  ['X', 'X', 'O', 'X'],
  ['X', 'O', 'X', 'X']
]));

console.log(captureRegion([
  ['X', 'X', 'O', 'X'],
  ['X', 'O', 'O', 'X'],
  ['X', 'X', 'O', 'X'],
  ['X', 'O', 'X', 'X']
]));