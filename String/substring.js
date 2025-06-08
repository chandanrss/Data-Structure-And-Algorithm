
// Given a string s, partition the string into one or more substrings such that the characters in each substring are unique. That is, no letter appears in a single substring more than once.

// Return the minimum number of substrings in such a partition.

// Note that each character should belong to exactly one substring in a partition.


// ---------------------------------------Solution ----------------------------------------------------

var minSubstringsWithUniqueChars = function(s) {

    let seen = [];   // Array to store characters in the current substring
    let count = 1;   // Minimum number of substrings (start with 1)

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        
        // Check if the character is already present in the current substring
        if (seen.includes(char)) {
            count++;         // Start a new substring
            seen = [];       // Reset the seen array for the new substring
        }
        seen.push(char);     // Add the current character to the substring
        console.log(seen);
    }
    
    return count;
};

minSubstringsWithUniqueChars("abcab")
