// Count Occurrences of Character
let arr = [1, 2, 3, 3, 5, 6, 8, 4, 3, 3, 4, 5, 9];

const digitFrequence = (arr, char) => {
  const totalCount = arr.reduce((accum, curChar) => {
    if (curChar === char) {
      accum++;
    }
    return accum;
  }, 0);
  return totalCount;
};

// Call the function correctly:
console.log(digitFrequence(arr, 4)); // Output: 2