// Find Ceil element in the sorted array

function ceilEle(arr, key) {
  let left = 0,
    right = arr.length - 1;
  let minEle = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === key) {
      return mid;
    } else if (arr[mid] < key) {
      left = mid + 1;
    } else {
      right = mid - 1;
      minEle = arr[mid];
    }
  }
  return minEle;
}

console.log(ceilEle([1, 2, 3, 4, 8, 10, 11, 12, 19], 9));
