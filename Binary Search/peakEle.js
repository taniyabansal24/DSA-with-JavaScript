// Peak element

function peakEle(arr) {
  let left = 0;
  let right = arr.length - 1;
  let n = arr.length;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    let next = (mid + 1) % n; // to avoid out of bounds
    let prev = (mid - 1 + n) % n; // to avoid negative index

    if (arr[mid] > arr[prev] && arr[mid] > arr[next]) {
      return arr[mid];
    } else if (arr[mid] < arr[next]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

const arr = [10, 20, 15, 2, 23, 90, 67];
console.log(peakEle(arr))
