// Question
// 1. You are given a number n, representing the size of array a.
// 2. You are given n numbers, representing elements of array a.
// 3. You are given another number d.
// 4. You are required to check if d number exists in the array a and at what index (0 based). If found print the index, otherwise print -1.

// Input Format
// A number n
// n1
// n2
// .. n number of elements
// A number d

// Output Format
// A number representing index at which d is found in array a and -1 if not found

// Solution

function findElements(n1, arr) {
    let index = -1; 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n1) {
            index = i;
            break; 
        }
    }
    return index; // Return the index
}

// Direct method
function findElement(n1, arr) {
  const sortedArr = arr.indexOf(n1);
  return sortedArr;
}

console.log(findElements(5, [3, 5, 6, 7, 8]));
console.log(findElement(5, [3, 5, 6, 7, 8]));
