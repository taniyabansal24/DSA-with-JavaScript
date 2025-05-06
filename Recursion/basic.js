// Loop vs Recursion

// function multiply(arr) {
//   let product = 1;
//   for (let i = 0; i < arr.length; i++) {
//     product *= arr[i];
//   }
//   return product;
// }

var maximumTripletValue = function (nums) {
  let result = 0;
  let rangeIndex = nums.length - 2;
  console.log(rangeIndex);

  let maxI = -Infinity;
  for (let i = 0; i < rangeIndex; i++) {
    maxI = Math.max(maxI, nums[i]); // Update maxI
  }

  let i = Math.max();
  let j = nums[nums.length - 1];
  let k = nums[1];
  result = (i - j) * k;
  if (result < 0) return 0;
  return result;
};

let nums = [1, 10, 3, 4, 19];
console.log(maximumTripletValue(nums));
// Expected => 79
