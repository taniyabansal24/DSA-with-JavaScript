// Ist Occurrence of the element in the array
function firstOccurrence(arr, key) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1; // Better to use -1 for not found case

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === key) {
      result = mid;
      right = mid - 1; // move left to find earlier occurrence
    } else if (key < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result;
}

// Last Occurrence of the element in the array
function lastOccurrence(arr, key) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1; // Better to use -1 for not found case

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === key) {
      result = mid;
      left = mid + 1; // move left to find earlier occurrence
    } else if (key < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result;
}

const arr = [2, 4, 10, 10, 10, 18, 20];
const key = 10;
console.log(firstOccurrence(arr, key)); // Output: 2
console.log(lastOccurrence(arr, key)); // Output: 4
