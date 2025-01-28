// Subarrays of an Array 

// Solution
function Subarrays(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            let subarray = [];
            for (let k = i; k <= j; k++) { // Loop from i to j to form the subarray
                subarray.push(arr[k]);
            }
            console.log(subarray); // Print the subarray
        }
    }
}

// Example usage
console.log(Subarrays([1, 2, 3]));
