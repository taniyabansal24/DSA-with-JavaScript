// Order Agnostic Search (We don't know whether the array is sorted in ascending order or descending order)

function orderAgnostic(arr, key) {
    let left = 0, right = arr.length - 1;
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
  
  
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const key = 4;
  console.log(orderAgnostic(arr, key)); // Output: 3
  
