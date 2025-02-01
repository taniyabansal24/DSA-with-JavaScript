// Problem statement 
// First Negative Number in every Window of Size K

// Input size 
// arr = [12, -1, -7, 8, -15, 30, 18, 28]
// k = 3

// Output
// -1 -1 -7 -15 -15 0


const arr = [12, -1, -7, 8, -15, 30, 18, 28];
const k = 3;

let current = []; // Store indices of negative numbers
let result = [];
let n = arr.length;

// Process the first window
for (let i = 0; i < k; i++) {
    if (arr[i] < 0) {
        current.push(i);
    }
}

// Process rest of the array using the sliding window
for (let i = k; i <= n; i++) {
    // Push the first negative number of the previous window
    if (current.length > 0) {
        result.push(arr[current[0]]);
    } else {
        result.push(0); // If no negative number in the window, push 0
    }

    // Remove elements that are out of the current window
    while (current.length > 0 && current[0] < i - k + 1) {
        current.shift();
    }

    // Add new element index if it's negative
    if (i < n && arr[i] < 0) {
        current.push(i);
    }
}

console.log(result.join(" ")); // Output: -1 -1 -7 -15 -15
