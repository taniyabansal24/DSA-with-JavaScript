// Ouestion
// 1. You are given a number n, representing the size of array a.
// 2. You are given n numbers, representing elements of array a.
// 3. You are required to calculate the inverse of array a.

// Input format
// Input is managed for you.

// Output format
// output is managed for you.

// Constraints 
// 0 <= n < 10^7


// Solution
function inverse(arr){
    let arr2 = [];
for (let i = 0; i < arr.length; i++) {
    let j = arr[i];
    arr2[j] = i;
}
return arr2;
}

console.log(inverse([3,4,1,2,0])) // Output: [4, 2, 3, 0, 1] 