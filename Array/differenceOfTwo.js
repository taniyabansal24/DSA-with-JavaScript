// Question
// 1. You are required to find the difference of two numbers represented by two arrays and print the arrays. a2-a1

//  Assumption number represented by a2 is greater.

// Output format
// A number representing diffrence of two numbers (a2-a1) represented by two arrays.

// Solution
function difference(arr1, arr2) {
    let result = [];
    let i = arr1.length - 1; // Pointer for arr1
    let j = arr2.length - 1; // Pointer for arr2
    let borrow = 0;
  
    while (j >= 0) { // Iterate through arr2 since it represents the larger number
      let digit1 = i >= 0 ? arr1[i] : 0; // Get digit from arr1 or 0 if out of bounds
      let digit2 = arr2[j]; // Get digit from arr2
  
      // Calculate the difference and handle borrow
      let diff = digit2 - digit1 - borrow;
  
      if (diff < 0) {
        diff += 10; // Borrow from the next place value
        borrow = 1;
      } else {
        borrow = 0;
      }
  
      result.unshift(diff); // Add the calculated digit to the result
      i--; // Move to the next digit in arr1
      j--; // Move to the next digit in arr2
    }
  
    // Remove leading zeros from the result
    while (result.length > 1 && result[0] === 0) {
      result.shift();
    }
  
    return result;
  }
  
  // Example Usage
  let arr1 = [1, 9, 5];    // Represents 195
  let arr2 = [3, 4, 5, 4]; // Represents 3454
  let result = difference(arr1, arr2);
  console.log("Difference of arrays:", result);
  