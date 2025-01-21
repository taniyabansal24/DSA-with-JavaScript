// Question
// 1. You are given a decimal number n.
// 2. You are given a base b.
// 3. You are required to convert the number n into its corresponding value in base b.

// Input format
// A number b

// Output format
// A number representing corresponding value n in number system oof base b

// constraints
// 0 <= d <= 512
// 2 <= b <= 10

// Function to convert decimal to any base (2 to 10)
function decimalToBase(n, b) {
  if (b < 2 || b > 10) {
    throw new Error("Base must be between 2 and 10.");
  }

  let result = "";
  while (n > 0) {
    let remainder = n % b;
    result = remainder + result;
    n = Math.floor(n / b);
  }

  return result || "0"; // Return "0" if n is 0
}

// Input
const n = 57; // Replace with your decimal number
const b = 2; // Replace with your desired base

// Output
try {
  const convertedValue = decimalToBase(n, b);
  console.log(`The number ${n} in base ${b} is: ${convertedValue}`);
} catch (error) {
  console.error(error.message);
}
