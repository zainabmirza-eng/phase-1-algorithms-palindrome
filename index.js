function isPalindrome(word) {
  // Convert the word to lowercase to handle case sensitivity
  word = word.toLowerCase();
  
  // Initialize pointers for the start and end of the word
  let start = 0;
  let end = word.length - 1;

  // Loop until the start pointer is less than the end pointer
  while (start < end) {
    // If characters at the start and end pointers don't match, return false
    if (word[start] !== word[end]) {
      return false;
    }
    // Move the pointers towards the center of the word
    start++;
    end--;
  }

  // If the loop completes without returning false, the word is a palindrome
  return true;
}

// Additional test cases
console.log("Expecting: true");
console.log("=>", isPalindrome("racecar"));

console.log("");

console.log("Expecting: false");
console.log("=>", isPalindrome("robot"));

module.exports = isPalindrome;
