// Bitonic Array

function searchEle(arr, key) {
  function peakEle(arr) {
    let left = 0;
    let right = arr.length - 1;
    let n = arr.length;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      let next = (mid + 1) % n;
      let prev = (mid - 1 + n) % n;

      if (arr[mid] > arr[prev] && arr[mid] > arr[next]) {
        return mid; // Return index, not value
      } else if (arr[mid] < arr[next]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  }

  function binarySearch(arr, key, left, right) {
    const isAscending = arr[left] < arr[right];

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (arr[mid] === key) return mid;

      if (isAscending) {
        if (key < arr[mid]) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      } else {
        if (key > arr[mid]) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }
    }
    return -1;
  }

  let index = peakEle(arr);
  let leftSearch = binarySearch(arr, key, 0, index - 1);
  let rightSearch = binarySearch(arr, key, index, arr.length - 1);

  if (leftSearch !== -1) return leftSearch;
  if (rightSearch !== -1) return rightSearch;
  return -1;
}

const arr = [1, 3, 5, 7, 8, 12, 6, 4, 2];
const key = 8;
console.log(searchEle(arr, key));
