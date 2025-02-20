// Find out and print Palindrom words

let s = "abccbc";

function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
    
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
        let ss = s.substring(i, j);
        if (isPalindrome(ss)) {
            console.log(ss);
        }   
    }
}
