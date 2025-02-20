// Question
// You have to compress the given string in the following two ways-
// 1. The string should be compressed such that consecutive duplicates of characters are replaced with a single character.
// for "aaabbccdee" the compressed string will be abcde
// 2. The string should be compressed such that consecutive duplicates of charcters are replaced with the character and followed by the number of consecutive duplicates.
// for "aaabbccdee" the compressed string will be "a3b2c2de2"


// Solution

const str = "aaabbccdee";


function compressorWithCount(str) {
    let result = "";
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        if (i < str.length - 1 && str[i] === str[i + 1]) {
            count++;
        } else {
            result += str[i] + (count > 1 ? count : "");
            count = 1;
        }
    }
    return result;
}

console.log(compressorWithCount(str)); // Output: "a3b2c2de2"
