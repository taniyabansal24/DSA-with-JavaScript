// Rotate an Array
// 1. You are given a number n, representing the size of array a.
// 2. You are given n numbers, representing element of array a.
// 3. You are given a number k.
// 4. Rotate the array a, k times to the right (for positive value of k), and to the left for negative values of k.

// Input Format
// Input is managed for you

// Output Format
// Output is managed for you

// Constraints
// 0 <= n < 10^4
// -10^9 <= a[i], k<=10^9

// Solution
function reverse(arr, i, j) {
  let li = i;
  let ri = j;
  while (li < ri) {
    let temp = arr[li];
    arr[li] = arr[ri];
    arr[ri] = temp;

    li++;
    ri--; 
  }
}

function rotate(arr, k) {
  k = k % arr.length; // Normalize k
  if (k < 0) {
    k = k + arr.length; // Convert negative rotations to positive
  }

  // Reverse parts of the array
  reverse(arr, 0, arr.length - k - 1); // Reverse the first part
  reverse(arr, arr.length - k, arr.length - 1); // Reverse the second part
  reverse(arr, 0, arr.length - 1); // Reverse the entire array

  return arr; // Return the modified array
}

// Example usage
console.log(rotate([1, 2, 3, 4, 5, 6], 2)); // Output: [5, 6, 1, 2, 3, 4]
