// Allocate Pages of Books

function allocatePages(arr, k) {
  function isValid(arr, mid, k) {
    let student = 1;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > mid) return false; // Extra safe check
      sum += arr[i];
      if (sum > mid) {
        student++;
        sum = arr[i];
      }
      if (student > k) {
        return false;
      }
    }
    return true;
  }

  function sumArr(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }

  let start = Math.max(...arr);
  let end = sumArr(arr);
  let result = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (isValid(arr, mid, k) === true) {
      result = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return result;
}

// const arr = [10, 20, 30, 40];
// const k = 2;
// console.log(allocatePages(arr, k)); // Output: 60

var findMin = function (nums) {
  let n = nums.length;
  let left = 0, right = n - 1;

  if (n == 0 || n == 1) {
    return nums;
  }
  
  while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      let next = (mid + 1) % n;
      let prev = (mid - 1 + n) % n;
      if (nums[mid] < nums[prev] && nums[mid] < nums[next]){
          return nums[mid];
      } else if (nums[mid] > nums[next]){
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }
  return -1;
};

const nums = [11,13,15,17];
console.log(findMin(nums));
