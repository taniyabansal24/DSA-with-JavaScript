// Question
// 1. You are given a numbers n, representing the size of array a.
// 2. You are given n numbers, representing elements of array a.
// 3. You are given another number d.
// 4. You are required find the ceil and floor of d in the array a.

// Ceil is defined as value in array which is just greater than d. If an element equal to d exists that will be considered as cell.

// Floor is defined as value in array which is just lesser than d. If an element equal to d exists that will be considered as floor.

// Assumption - array is sorted

// Solution
function ceilFloor(arr, n) {
    let l = 0;
    let h = arr.length - 1;
    let floor = -1, ceil = -1;

    while (l <= h) {
        let m = Math.floor((l + h) / 2);

        if (arr[m] == n) {
            return { floor: arr[m], ceil: arr[m] }; // Exact match
        } else if (arr[m] < n) {
            floor = arr[m]; // Update floor
            l = m + 1;
        } else {
            ceil = arr[m]; // Update ceil
            h = m - 1;
        }
    }
    
    return { floor, ceil };
}

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let n = 25;

console.log(ceilFloor(arr, n)); 
