// Next Alphabet

function nextAlphabet(arr, key) {
    let left = 0;
    let right = arr.length - 1;
    let result = '#'; // '#' means no character found yet (you can choose anything)
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
  
      if (arr[mid] > key) {
        result = arr[mid]; // possible answer
        right = mid - 1;   // go left to find even smaller greater element
      } else {
        left = mid + 1;    // move right
      }
    }
    return result;
  }
  
  const arr = ['a', 'c', 'e', 'g', 'j'];
  const key = 'i';
  console.log(nextAlphabet(arr, key));
  