// Problem

// Find first non-repeating character.


function firstNonRepeatingChar(str) {
   const charCount = new Map();

   for (let i = 0; i < str.length; i++) {
    const element = str[i];
    charCount.set(element, (charCount.get(element) || 0) + 1);
   }

   for (let j = 0; j < str.length; j++) {
        if(charCount.get(str[j]) === 1){
            return str[j];
        }
    
   }
   return null
}

// Example usage
console.log(firstNonRepeatingChar("leetcode"));     // "l"
console.log(firstNonRepeatingChar("loveleetcode")); // "v"
console.log(firstNonRepeatingChar("aabb"));         // null