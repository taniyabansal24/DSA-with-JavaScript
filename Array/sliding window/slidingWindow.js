// Sliding window algorithim

const arr = [3,8,2,5,7,6,12];
const w = 4;


let current = 0;
let n = arr.length - 1;
for (let i = 0; i < w; i++){
    current += arr[i];
}

let maxx = current;
for (let i = 1; i <= n - w; i++) {
    current = current - arr[i - 1] + arr[i + w - 1];
    if (current > maxx){
        maxx = current;
    }
}
console.log(maxx);