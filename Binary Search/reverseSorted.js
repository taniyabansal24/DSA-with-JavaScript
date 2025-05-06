// Decrending Sorted Array

function decSorted(arr, key) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] == key) {
        return mid;
    } else if(arr[mid] > key){
        left = mid + 1;
    } else {
        right = mid - 1;
    }
  }
  return - 1;
}

const arr = [20,17,15,14,13,12,10,9,8,4], key = 4;
console.log(decSorted(arr,key))
