// Example 3: Given two sorted integer arrays arr1 and arr2, return a new array that combines both of them and is also sorted.

var combineArr = function (arr1, arr2) {
  finalArr = [];

  i = j = 0;

  while (i < arr1.length || j < arr2.length) {
    // console.log(i, j+1, "      -------------------")
    if (j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        finalArr.push(arr1[i]);
        i++;
        // console.log(finalArr, i);
      } else {
        finalArr.push(arr2[j]);
        j++;
        // console.log("hi ", finalArr, j);
      }
    } else {
      finalArr.push(arr1[i]);
      i++;
    //   console.log("i", finalArr);
    }

  }
  return finalArr;
};

console.log(combineArr([1, 4, 20, 76], [3, 5, 9, 11, 33]));
