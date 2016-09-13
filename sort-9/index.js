/**
* Take a 3x3 matrix filled with elements from 1-9:
* - Sort the matrix:
*   - numbers can only be swapped with 9
* Return the path
*/

const sortMatrix = (matrix) => {
  // matrix is always 3x3
  const location = {};
  const convertToIndex = (row, col) => {
    return row*3 + col;
  };
  const swap = (first, second) => {

  };

  matrix.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      location[col]= [rowIndex, colIndex];
    });
  });

  let nine = matrix[location[9][0]][location[9][1]];
  if (location[convertToIndex(location[9][0], location[9][1])][0] === 2 && location[convertToIndex(location[9][0], location[9][1])][1] === 2) ;

  return location;
};

console.log(sortMatrix(
  [
    [5,2,1],
    [7,3,6],
    [4,9,8]
  ]
));