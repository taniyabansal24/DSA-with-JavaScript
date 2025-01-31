// Count Occurrences of Anagrams
// Input : forxxorfxdofr, for
// Output : 3
// Explanation : Anagrams of the word for – for, orf, ofr appear in the text and hence the count is 3.

// Step-by-Step Breakdown

// Create a frequency map of the target word (wordMap)

// This tells us how many times each letter should appear in a valid anagram.

// Use a sliding window (windowMap) of size k

// Expand the window by adding characters.
// If the character count matches the target word’s count, track it.
// If the window exceeds size k, remove the leftmost character.
// Count valid anagrams when the window is exactly k in size and all character frequencies match.

// Solution
function countAnagrams(text, word) {
    let k = word.length;  // Length of the anagram pattern
    let n = text.length;  // Length of the text
    let wordMap = new Map();  // Stores frequency of characters in word
    let windowMap = new Map();  // Stores frequency of characters in the sliding window
    
    // 1️⃣ Build frequency map for the word
    for (let char of word) {
        wordMap.set(char, (wordMap.get(char) || 0) + 1);
    }

    let left = 0, right = 0, count = 0, matches = 0;

    // 2️⃣ Start sliding window
    while (right < n) {
        let char = text[right];  // Current character in the text

        // Add current character to windowMap
        windowMap.set(char, (windowMap.get(char) || 0) + 1);

        // 3️⃣ Check if this character's frequency matches the wordMap
        if (wordMap.has(char) && windowMap.get(char) === wordMap.get(char)) {
            matches++;
        }

        // 4️⃣ If window size exceeds k, shrink it
        if (right - left + 1 > k) {
            let leftChar = text[left];  // Character to remove
            if (wordMap.has(leftChar) && windowMap.get(leftChar) === wordMap.get(leftChar)) {
                matches--;  // Reduce match count if frequency is no longer same
            }
            windowMap.set(leftChar, windowMap.get(leftChar) - 1);

            if (windowMap.get(leftChar) === 0) {
                windowMap.delete(leftChar);  // Remove from map if frequency is zero
            }
            left++;  // Move the window ahead
        }

        // 5️⃣ If window size is k and all matches found, count anagram
        if (right - left + 1 === k && matches === wordMap.size) {
            count++;
        }

        right++;  // Expand window
    }

    return count;
}

// Example usage
let text = "forxxorfxdofr";
let word = "for";
console.log(countAnagrams(text, word)); // Output: 3
