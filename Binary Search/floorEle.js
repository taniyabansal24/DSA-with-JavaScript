// Find floor element in the sorted array

function floorEle(arr, key) {
  let left = 0;
  let right = arr.length - 1;
  let maxEle = -1; // Important: No floor yet

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === key) {
      return arr[mid]; // return element, not index
    }

    if (arr[mid] < key) {
      maxEle = arr[mid];
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return maxEle;
}

console.log(floorEle([1, 2, 3, 4, 8, 10, 11, 12, 19], 13));
