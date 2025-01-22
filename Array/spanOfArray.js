// Question
// You are given a number n, representing the count of elements.
// You are given n numbers.
// You are required to find the span of input. Span is defined as difference of maximum value and minimum.

// Input Format
// A number n
// An array arr of size n

// Output Format
// A number representing the span of the array.

// constraints
// 1 <= n <= 10^4
// 0 <= n1,n2, .. n element <= 10^9

// Solution : 1 - Sorting
function spanOfArray(n, arr) {
  const sortedArray = arr.slice().sort((a, b) => a - b);
  const firstElement = sortedArray[0];
  const lastElement = sortedArray[sortedArray.length - 1];

  const span = lastElement - firstElement;

  return span;
}

console.log(spanOfArray(6, [15, 30, 40, 4, 11, 9]));

//  Optimized Solution: Sorting has 𝑂(𝑛log𝑛) time complexity. You can achieve 𝑂(𝑛) complexity by directly finding the maximum and minimum values without sorting:

// Solution : 1 - Direct
function spanOfArray(n, arr) {
  let min = Infinity;
  let max = -Infinity;

  for (let i = 0; i < n; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }

  const span = max - min;
  return span;
}

console.log(spanOfArray(6, [15, 30, 40, 4, 11, 9])); 
