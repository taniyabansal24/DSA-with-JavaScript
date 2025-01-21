// You are given a base b.
// You are given two numbers n1 and n2 of base b.
// You are required to add the two numbers and print their value in base b.

// Input Format
// A base b
// A number n1
// A number n2

// Output Format
// A number of base b2 equal in value to n of base b1.

// constraints
// 2 <= b <= 10
// 0 <= n1 <= 256
// 0 <= n2 <= 256

function anyBaseAddition(b, n1, n2) {
    let rv = 0; // Result value
    let c = 0;  // Carry
    let p = 1;  // Place value

    while (n1 > 0 || n2 > 0 || c > 0) {
        let d1 = n1 % 10; // Extract last digit of n1
        let d2 = n2 % 10; // Extract last digit of n2

        n1 = Math.floor(n1 / 10); // Remove the last digit from n1
        n2 = Math.floor(n2 / 10); // Remove the last digit from n2

        let d = d1 + d2 + c; // Sum of digits and carry
        c = Math.floor(d / b); // Update carry for the next place
        d = d % b; // Current digit in base b

        rv += d * p; // Add the digit to the result at the correct place value
        p *= 10; // Move to the next place value
    }

    return rv;
}

// Example Usage
const b = 8; // Base
const n1 = 236; // Number 1 in base 8
const n2 = 754; // Number 2 in base 8

const converted = anyBaseAddition(b, n1, n2);
console.log(`The addition is ${converted} in base ${b}.`);

