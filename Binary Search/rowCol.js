// Search in Row wise + Column wise Sorted Array

function rowCol(mat, x) {
  const rows = mat.length;
  const cols = mat[0].length;

  let row = 0;
  let col = cols - 1;

  while (row < rows && col >= 0) {
    if (mat[row][col] === x) {
      return [row, col]; // Found at (row, col)
    } else if (mat[row][col] > x) {
      col--; // Move left
    } else {
      row++; // Move down
    }
  }

  return [-1, -1]; // Not found
}

const mat = [
  [3, 30, 38],
  [20, 52, 54],
  [35, 60, 69],
];
const x = 35;
console.log(rowCol(mat, x)); // Output: [2, 0]
