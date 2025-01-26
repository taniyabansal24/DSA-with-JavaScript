// Reverse of array


// 1. Using the Built-in reverse() Method

const arr1 = [1, 2, 3, 4, 5];
const reversed = arr1.reverse(); // In-place modification
console.log("Using the Built-in reverse() Method: ", reversed); // [5, 4, 3, 2, 1]




// 2. Using a Manual Approach

const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length / 2; i++) {
  const temp = arr[i];
  arr[i] = arr[arr.length - 1 - i];
  arr[arr.length - 1 - i] = temp;
}
console.log("Using a Manual Approach: ",arr); // [5, 4, 3, 2, 1]




// 3. Using a New Array

const arr2 = [1, 2, 3, 4, 5];
const reversed1 = [];
for (let i = arr2.length - 1; i >= 0; i--) {
  reversed1.push(arr2[i]);
}
console.log("Using a New Array: ",reversed1); // [5, 4, 3, 2, 1]
