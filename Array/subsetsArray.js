// Subsets of an Array

// Output format
// [Tab seperated elements of subset]
// --
// All Subsets

// Constraints
// 1 <= n <= 10
// 0 <- n1, n2, ...n elements <= 10^3

// Sample Input
// [10,20,30]

// Sample Output
// - - -
// - - 30
// - 20 -
// - 20 30
// 10 - -
// 10 - 30
// 10 20 -
// 10 20 30

function subsetsArray(arr) {
  let limit = Math.pow(2, arr.length); // Total subsets
  let result = [];

  for (let i = 0; i < limit; i++) {
    let set = "";
    let temp = i;

    for (let j = arr.length - 1; j >= 0; j--) {
      let r = temp % 2;
      temp = Math.floor(temp / 2); // Use Math.floor to handle division

      if (r === 0) {
        set = "-\t" + set; // Add a tab-separated dash for excluded elements
      } else {
        set = arr[j] + "\t" + set; // Add the array element with a tab
      }
    }
    result.push(set.trim()); // Trim and add the subset string to the result
  }

  return result.join("\n"); // Join all subsets with newlines
}

// Sample Input
console.log(subsetsArray([10, 20, 30]));
