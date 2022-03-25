// Function that returns the largest palindrome found from the product of two 3-digit numbers
function largestPalindrome() {
    let largest = 0;

    for (var i = 999; i > 100; i--) {
        for (var j = i; j > 100; j--) {
            if (isPalindrome(i * j) && i * j > largest) {
                largest = i * j;
            }
        }
    }

    return largest;
}

// Checks if a number is palindrome
function isPalindrome(num) {
    num = "" + num;

    return num === num.split("").reverse().join("");
}

// For inputs and testing
console.log(largestPalindrome());
