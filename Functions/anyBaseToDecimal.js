// Question
// 1. You are given a number n.
// 2. You are given a base b. n is a number on base b.
// 3. You are required to contact the number n into its corresponding value in decimal number system.

// Input Format
// A number n
// A base b

// Output Format
// A decimal number representing corresponding value of n in base b.

// constraints
// 0 <= d <= 1000000000
// 2 <= b <= 10

// Function to convert a number in base b to decimal
function baseToDecimal(n, b) {
    let decimalValue = 0;
    let power = 0;

    // Process each digit from right to left
    while (n > 0) {
        let digit = n % 10; // Extract the last digit
        decimalValue += digit * Math.pow(b, power); // Add the value of the digit in decimal
        n = Math.floor(n / 10); // Remove the last digit
        power++; // Move to the next higher power
    }

    return decimalValue;
}

// Input
const n = 1010; // Replace with the number in base b
const b = 2;    // Replace with the base of the number

// Output
try {
    if (b < 2 || b > 10) {
        throw new Error("Base must be between 2 and 10.");
    }

    const decimalResult = baseToDecimal(n, b);
    console.log(`The number ${n} in base ${b} is: ${decimalResult} in decimal.`);
} catch (error) {
    console.error(error.message);
}


