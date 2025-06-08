// Write a program to Validate an IP Address.  An IP address is a unique identifier for devices on a network, enabling internet communication.
//  It has two versions: IPv4 and IPv6. We will validate IPv4 and IPv6 addresses separately.

// IPv4 addresses use dot-decimal notation, consisting of four numbers (0-255) separated by dots, e.g., 172.16.254.1.

// Example

// Input: ip1 = "128.0.0.1";
// Output: Valid
// Explantaion: Each section split by '.' contains only digits, has no leading zeros, and lies within the range 0-255.

//  Input: ip2 = "125.16.100.1";
// Output: Valid
// Explanation: Each section split by '.' contains only digits, has no leading zeros, and lies within the range 0-255.

// Input: ip3 = "125.512.100.1";
// Output: Invalid
// Explanation: Each section must be within the range 0-255, but 512 exceeds this limit, making the IP invalid.

// Input: ip4 = "125.512.100.abc"
// Output: Invalid
// Explanation: Each section must contain only numeric values, but "abc" is not a valid integer, making the IP invalid.

var validateIPAddress = function (ipAddr) {
  //check String
  if (ipAddr.length < 7) return false;

  //Check IP Format and Length
  const v = s.split(".");
  if (v.length !== 4) return false;

  for (let i = 0; i < v.length; i++) {
    const temp = v[i];
    if (temp.length > 1 && temp[0] === "0") return false;

    for (let j = 0; j < temp.length; j++) {
      if (isNaN(temp[j])) return false;
    }

    if (parseInt(temp) > 255) return false;
  }
  return true;


};

const s1 = "128.0.0.1";
const s2 = "125.16.100.1";
const s3 = "125.512.100.1";
const s4 = "125.512.100.abc";

validateIPAddress(s1) ? console.log("Valid")
              : console.log("Not valid");
validateIPAddress(s2) ? console.log("Valid")
              : console.log("Not valid");
validateIPAddress(s3) ? console.log("Valid")
              : console.log("Not valid");
validateIPAddress(s4) ? console.log("Valid")
              : console.log("Not valid");