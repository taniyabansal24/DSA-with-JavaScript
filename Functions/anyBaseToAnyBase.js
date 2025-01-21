// 1. You are given a number n.
// 2. You are given a base b1. n is a number on base b.
// 3. You are given another base b2.
// 4. You are required to convert the number n of base b1 to a number in base b2

// Input Format
// A number n
// A base b1
// A base b2

// Output Format
// A number of base b2 equal in value to n of base b1.

// constraints
// 0 <= n <= 512
// 2 <= b1 <= 10
// 2 <= b2 <= 10

function baseConversion(n, b1, b2) {
    // Step 1: Convert n from base b1 to decimal
    let decimalValue = 0;
    let power = 0;
    let originalNumber = n; // Preserve original n for reference

    while (n > 0) {
        let digit = n % 10; // Extract the last digit
        decimalValue += digit * Math.pow(b1, power); // Add the value of the digit in decimal
        n = Math.floor(n / 10); // Remove the last digit
        power++;
    }

    // Step 2: Convert decimal to base b2
    let result = '';
    while (decimalValue > 0) {
        let digit = decimalValue % b2; // Get the remainder
        result = digit + result; // Add the digit to the front of the result string
        decimalValue = Math.floor(decimalValue / b2); // Remove the last digit in decimal
    }

    return result || '0'; // Return the result, '0' if result is empty
}

// Example Usage
const n = 1010; // Base 2
const b1 = 2;   // Base 2
const b2 = 10;  // Base 10

const converted = baseConversion(n, b1, b2);
console.log(`The number ${n} in base ${b1} is ${converted} in base ${b2}.`);
