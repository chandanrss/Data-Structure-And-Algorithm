// Given an integer, convert it to a roman numeral.
// Input: num = 3
// Output: "III"
// Input: num = 4
// Output: "IV"
// Input: num = 9
// Output: "IX"

var intToRoman = function(num) {
    const romanNumerals = new Map([
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ]);

    let result = '';
    for (const [value, symbol] of romanNumerals) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
};

// Example usage
console.log(intToRoman(3));    // Output: "III"
console.log(intToRoman(4));    // Output: "IV"
console.log(intToRoman(94));   // Output: "XCIV"
console.log(intToRoman(3900)); // Output: "MMMCM"