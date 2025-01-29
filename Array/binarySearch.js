// Binary Search Algorithm 

const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let ele = 70;

let l = 0;
let h = arr.length - 1;

while (l <= h) {
  let m = Math.floor((l + h) / 2); // Use Math.floor for integer mid-point
  if (ele > arr[m]) {
    l = m + 1; // Search in the right half
  } else if (ele < arr[m]) {
    h = m - 1; // Search in the left half
  } else {
    console.log(`Element found at index: ${m}`);
    return;
  }
}

console.log("Element not found in the array.");
