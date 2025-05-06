// Nearly sorted array i can be present on i , i + 1 or i - 1;

function nearlySorted(arr, key) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === key) {
        return mid;
      }
      // Check mid + 1 safely
      if (mid + 1 <= right && arr[mid + 1] === key) {
        return mid + 1;
      }
      // Check mid - 1 safely
      if (mid - 1 >= left && arr[mid - 1] === key) {
        return mid - 1;
      }
  
      if (arr[mid] < key) {
        left = mid + 2; // Skip mid and mid+1
      } else {
        right = mid - 2; // Skip mid and mid-1
      }
    }
    return -1;
  }
  

const arr = [5, 10, 30, 20, 40],
  key = 30;
console.log(nearlySorted(arr, key));
