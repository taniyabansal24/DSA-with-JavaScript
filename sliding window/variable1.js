// Find the largest window size of sum 5;

function largestWindowSize (arr, k) {
    let max = 0, i = 0, sum = 0;

    for (let j = 0; j < arr.length; j++) {
        sum += arr[j];

        while(sum > k){
            sum -= arr[i];
            i++;
        }

        if (sum === k) {
            max = Math.max(max, j-i+1);
        }
    }

    return max;
}

const arr = [4,1,1,1,2,3,5];
const k = 5;

console.log(largestWindowSize(arr, k))