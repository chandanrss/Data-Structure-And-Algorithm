// Problem statement : Aman, who is working at a software company forgot the password of his Linkedin id.
// But he knows the ASCII values of his password in reverse order. Help aman to find the password.
// To decode the password, first reverse the string of digits, then successively pick valid values from the string and convert
// them to their ASCII equivalents. Some of the values will have two digits, and others three. Use the ranges of
//  valid values when decoding the string of digits.

// Some of the ASCII values are given with their characters:

//  The ASCII value of A to Z is 65 to 90.
//  The ASCII value of a to z is 97 to 122.
//  The ASCII value of space characters is 32.
// Note: The password only has alphabets and blank spaces.

// Given a string , decode the password by following the steps mentioned above.

// Constraints:
// 1<= |s| <=10^5
// s[i] is an ascii character in the range [A-Za-z] or a space character
// Sample Input:
// 796115110113721110141108
// Sample Output:
// PrepInsta
// Explanation
// The reversed string will be 801141011127311011511697, which if analysed as ascii will be “PrepInsta”

var passwordASCII = function (asciiCode) {
  let newAscii = asciiCode.split("").reverse().join("");
  let password = "";

  for (let i = 0; i < newAscii.length;) {
    if (i + 2 < newAscii.length) {
      let num = newAscii.substr(i, 3);
      num = parseInt(num);
      console.log(num);
      if (num >= 100 && num <= 122) {
        password += String.fromCharCode(num);
        i += 3;
        // console.log("Char", password);
        continue;
      }
    }
    if (i + 1 < newAscii.length) {
      let num = newAscii.substr(i, 2);
      num = parseInt(num);
      if ((num >= 65 && num <= 99) || num === 32) {
        password += String.fromCharCode(num);

        i += 2;
      } else i++;
    }
  }
  return password;
};

// console.log(passwordASCII("321011011511697")); // Output: "Aman"
console.log(passwordASCII("796115110113721110141108"));
