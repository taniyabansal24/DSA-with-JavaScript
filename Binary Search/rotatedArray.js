// Number of times a Sorted array is Rotated

function rotatedArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  let n = arr.length;

  while (left <= right) {
    // If already sorted, then smallest is at left
    if (arr[left] <= arr[right]) {
      return left;
    }

    let mid = Math.floor((left + right) / 2);
    let next = (mid + 1) % n; // to avoid out of bounds
    let prev = (mid - 1 + n) % n; // to avoid negative index

    // Check if mid is the smallest
    if (arr[mid] <= arr[next] && arr[mid] <= arr[prev]) {
      return mid;
    }

    // If left half is sorted, go right
    if (arr[left] <= arr[mid]) {
      left = mid + 1;
    }
    // Otherwise, go left
    else {
      right = mid - 1;
    }
  }
  return -1; // Not rotated
}

const arr = [11, 12, 15, 2, 5, 6, 8];
console.log(rotatedArray(arr)); // Output: 3 (index of 2)
