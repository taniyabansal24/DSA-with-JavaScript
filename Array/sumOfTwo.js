// Question
// 1. You have two array a1, a2.
// 2. The two arrays represent digits of two numbers.
// 3. You required to add the numbers represented by two array and print the arrays.

// Output Format
// A number representing sum of two numbers, represented by two arrays.

// Constraints
// 1 <= n1, n2 <= 100
// 0 <= a1[i], a2[i] < 10

// Solution
function sumOfTwoArray(arr1, arr2) {
    let i = arr1.length - 1; // Pointer for arr1
    let j = arr2.length - 1; // Pointer for arr2
    let carry = 0; // Carry for addition
    let result = []; // Result array
  
    while (i >= 0 || j >= 0 || carry > 0) {
      let digit1 = i >= 0 ? arr1[i] : 0; // Get digit from arr1 or 0 if out of bounds
      let digit2 = j >= 0 ? arr2[j] : 0; // Get digit from arr2 or 0 if out of bounds
  
      let sum = digit1 + digit2 + carry; // Sum of digits and carry
      carry = Math.floor(sum / 10); // Update carry
      result.unshift(sum % 10); // Add the digit to the result array
  
      i--; // Move to the next digit in arr1
      j--; // Move to the next digit in arr2
    }
  
    return result; // Return the resulting array
  }
  
  // Example Usage
  let arr1 = [3, 4, 5, 6];
  let arr2 = [1, 9, 5];
  let result = sumOfTwoArray(arr1, arr2);
  console.log("Sum of arrays:", result);
  
