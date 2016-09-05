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


// DFS
/**
 * When find 'O' look for path to boundary, if found then turn all element
 *
 * Problem: TC too high
*/

const captureRegionDFS = function (board) {
  const lastRow = board.length -1;
  const lastCol = board[0].length -1;

  const hasPath = function (row, col, path) { // if 'o' has path to boundary
    if (board[row][col] === 'X' || path[row.toString()+col.toString()]) {
      return false;
    }

    if (row === lastRow || col === lastCol || row === 0 || col === 0) { // at boundary
      return true;
    } else {
      path[row.toString()+col.toString()] = true;
      return hasPath(row-1, col, path) || hasPath(row+1, col, path) || hasPath(row, col+1, path) || hasPath(row, col-1, path);
    }
  };

  board.forEach(function (rowElement, i) {
    rowElement.forEach(function (colElement, j) {
      if (colElement === 'O' && !hasPath(i, j, {})) {
        board[i][j] = 'X';
      }
    });
  });

  return board;
};

// console.log(captureRegionDFS([
//   ['X', 'X', 'X', 'X'],
//   ['X', 'O', 'O', 'X'],
//   ['X', 'X', 'O', 'X'],
//   ['X', 'O', 'X', 'X']
// ]));

// console.log(captureRegionDFS([
//   ['X', 'X', 'O', 'X'],
//   ['X', 'O', 'O', 'X'],
//   ['X', 'X', 'O', 'X'],
//   ['X', 'O', 'X', 'X']
// ]));

const captureRegionBFS = function (board) {
  const lastRow = board.length -1;
  const lastCol = board[0].length -1;

  const hasPath = function (row, col) {
    const queue = [[row, col]];
    const checked = {};

    // do BFS on surrounding => know that curr is 'O' and in bounds
    while (queue.length > 0) {
      const curr = queue.shift();

      if (board[curr[0]][curr[1]] === 'O') {
        if (curr[0] === lastRow || curr[0] === 0 || curr[1] === lastCol || curr[1] === 0) {
          return true;
        } else if (!checked[curr[0].toString() + curr[1].toString()]) {
          checked[curr[0].toString() + curr[1].toString()] = true;
          queue.push([curr[0]-1, curr[1]], [curr[0]+1, curr[1]], [curr[0], curr[1]-1], [curr[0], curr[1]+1]);
        }
      }
    }
    return false;
  };

  board.forEach(function (row, i) {
    row.forEach(function(colElement, j) {
      if (colElement === 'O' && !hasPath(i, j)) {
        board[i][j] = 'X';
      }
    });
  });

  return board;
};
// console.log(captureRegionBFS([
//   ['X', 'X', 'X', 'X'],
//   ['X', 'O', 'O', 'X'],
//   ['X', 'X', 'O', 'X'],
//   ['X', 'O', 'X', 'X']
// ]));

// console.log(captureRegionBFS([
//   ['X', 'X', 'O', 'X'],
//   ['X', 'O', 'O', 'X'],
//   ['X', 'X', 'O', 'X'],
//   ['X', 'O', 'X', 'X']
// ]));