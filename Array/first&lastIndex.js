// First and Last index by binary search

function firstLast(n, arr) {
    let first = -1, last = -1;
    let l = 0, h = arr.length - 1;

    // Finding first occurrence
    while (l <= h) {
        let m = Math.floor((l + h) / 2);
        if (arr[m] < n) {
            l = m + 1;
        } else if (arr[m] > n) {
            h = m - 1;
        } else {
            first = m;
            h = m - 1; // Keep searching in the left half
        }
    }

    // Reset pointers for last occurrence search
    l = 0, h = arr.length - 1;

    while (l <= h) {
        let m = Math.floor((l + h) / 2);
        if (arr[m] < n) {
            l = m + 1;
        } else if (arr[m] > n) {
            h = m - 1;
        } else {
            last = m;
            l = m + 1; // Keep searching in the right half
        }
    }

    return { first, last };
}

console.log(firstLast(10, [10,10,10,20,20,30,30,30,40,40]));
