// Count of an Element in a Sorted Array

function countEle(arr, key) {
    function firstOccurrence(arr, key) {
      let left = 0;
      let right = arr.length - 1;
      let result = -1;
  
      while (left <= right) {
        let mid = Math.floor((left + right) / 2);
  
        if (arr[mid] === key) {
          result = mid;
          right = mid - 1; // move left
        } else if (key < arr[mid]) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }
      return result;
    }
  
    function lastOccurrence(arr, key) {
      let left = 0;
      let right = arr.length - 1;
      let result = -1;
  
      while (left <= right) {
        let mid = Math.floor((left + right) / 2);
  
        if (arr[mid] === key) {
          result = mid;
          left = mid + 1; // move right
        } else if (key < arr[mid]) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }
      return result;
    }
  
    let fIdx = firstOccurrence(arr, key);
    let lIdx = lastOccurrence(arr, key);
  
    if (fIdx === -1 || lIdx === -1) {
      return 0;
    }
  
    let count = lIdx - fIdx + 1;
    return count;
  }
  
  const arr = [2, 4, 10, 10, 10, 18, 20];
  const key = 10;
  console.log(countEle(arr, key));  // Output: 3
  
