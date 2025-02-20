// Question
// 1. You are given an ArrayList of positive integers.
// 2. You have to remove prime numbers from the given ArrayList and retrun the updated ArrayList.

// Note -> The order of elements should remain same.

// Output 
// An Arraylist

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function removePrimes(arr) {
    return arr.filter(num => !isPrime(num));
}

const arr = [7, 18, 3, 14, 19, 31, 72];
const result = removePrimes(arr);
console.log(result);


