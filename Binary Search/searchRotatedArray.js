// Seach in Rotated Sorted Array

function searchRotated(nums, target) {
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

  let index = rotatedArray(nums);

  // Binary Index for left part
  function leftPart(nums, left, right) {
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  }

  // Binary Index for right part
  function rightPart(nums, left, right) {
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  }

  // Search in left and right parts
  let leftSearch = leftPart(nums, 0, index - 1);
  let rightSearch = rightPart(nums, index, nums.length - 1);

  // Return the one which is not -1 (found)
  if (leftSearch !== -1) return leftSearch;
  if (rightSearch !== -1) return rightSearch;
  return -1;
}

const nums = [4, 5, 6, 7, 0, 1, 2],
  target = 6;
console.log(searchRotated(nums, target));
