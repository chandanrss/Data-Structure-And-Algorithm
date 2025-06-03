//
//
//
//
//
//
//
// s = "babad";

var longestPalindrome = (str) => {
  let tempString = "";

  for (let i = 0; i < str.length; i++) {
    let len1 = expandAroundCenter(i, i);
    let len2 = expandAroundCenter(i, i + 1);
    if(len1.length > tempString.length){
        tempString = len1;
    }
    if(len2.length > tempString.length) tempString = len2
    // console.log(len1,len2);
    let len = Math.max(len1, len2);
  }

  function expandAroundCenter(left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
        // console.log(str[left] === str[right]);
      left--;
      right++;
    }
    // console.log("i" ,left , "j",right, str.substring(left + 1, right));
    return str.substring(left + 1, right);
  }
  console.log(tempString);
  return tempString;
};

longestPalindrome("babcbacccab");
// longestPalindrome("babcd");
