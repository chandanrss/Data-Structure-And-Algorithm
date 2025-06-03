// Given an integer, convert it to a roman numeral.
// Input: num = 3
// Output: "III"
// Input: num = 4
// Output: "IV"
// Input: num = 9
// Output: "IX"

var intToRoman = function(num) {
     const romanNumerals =  {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M'
    };
    let result = '';
    const keys = Object.keys(romanNumerals).reverse();
    for (let i  = 0; i < keys.length; i++) {
        while ( num >= parseInt(keys[i])){
            result += romanNumerals[keys[i]];
            num = num - parseInt(keys[i]);
        }
     }
     console.log(result);
     return result;
};

intToRoman(3); // Output: "III"
intToRoman(4); // Output: "IV"
intToRoman(94); // Output: "XCIV"
intToRoman(3900); // Output: "IMMMCMXC"
