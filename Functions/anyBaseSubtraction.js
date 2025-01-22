// Question
// You are given a base b.
// You are given two numbers n1 and n2 of base b.
// You are required to subtract the n1 from n2 and print the value

// Input Format
// A base b
// A number n1
// A number n2

// Output Format
// A number of base b equal in value to n2 - n1.

// constraints
// 2 <= b <= 10
// 0 <= n1 <= 256
// n1 <= n2 <= 256

//Solution
function baseSubtraction(b, n1, n2) {
  let rv = 0; // Result value
  let p = 1; // Place value
  let borrow = 0; // Borrow for subtraction

  while (n2 > 0 || n1 > 0) {
    let d2 = n2 % 10; // Extract last digit of n2
    let d1 = n1 % 10; // Extract last digit of n1

    // Subtract with borrow
    let diff = d2 - d1 - borrow;

    // Handle negative result by borrowing from the next place value
    if (diff < 0) {
      diff += b; // Add base to make it non-negative
      borrow = 1; // Set borrow for the next place value
    } else {
      borrow = 0; // Reset borrow if no borrow is needed
    }

    // Add the calculated digit to the result
    rv += diff * p;

    // Update numbers and place value
    n1 = Math.floor(n1 / 10);
    n2 = Math.floor(n2 / 10);
    p *= 10;
  }

  return rv;
}

// Example Usage
const b = 8; // Base
const n1 = 236; // Number 1 in base 8
const n2 = 1212; // Number 2 in base 8

const result = baseSubtraction(b, n1, n2);
console.log(`The result of subtraction is ${result} in base ${b}.`);
