// Question
// You are given an array of numbers. Each number represents the length of a horizontal bar. Print the horizontal bar chart using *.

// Output format
// A bar chart of asteriks representing value of array a.

//contraints 
// 1 <= n <= 30
// 0 <= n1, n2,... n element <= 10

function barChart(arr) {
    // Find the maximum height in the array
    const maxHeight = Math.max(...arr);

    // Loop from maxHeight down to 1
    for (let floor = maxHeight; floor >= 1; floor--) {
        let row = "";

        // Check if each bar reaches this height
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= floor) {
                row += "* ";
            } else {
                row += "  ";
            }
        }

        console.log(row); // Print the row
    }
}

// Example Usage
const arr = [3, 5, 1, 4];
barChart(arr);