//
//
//
//
//
// arr = [2,2,2,3,3,4,4];
//return an odd-occurring element:
var oddOccur = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    // console.log("i", i);
    let counter = 1;

    while (arr[i + 1] == arr[i] && i + 1 < arr.length) {
      //2===2
      counter++;
      console.log("for", arr[i], counter);
      i++;
    }

    if (counter % 2 !== 0) return arr[i];
  }
};

var allOddOccur = function (arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    // console.log("i", i);
    let counter = 1;

    while (arr[i + 1] == arr[i] && i + 1 < arr.length) {
      //2===2
      counter++;
      console.log("for", arr[i], counter);
      i++;
    }

    if (counter % 2 !== 0) result.push(arr[i]);
  }

  return result;
};

let a = [2, 2, 2, 3, 3, 5, 5, 6, 6, 6, 6, 6];

// console.log(oddOccur(a));
console.log(allOddOccur(a));


// The outer loop runs through the array only once.

// The inner while loop increments i, so each element is only visited once total (whether by for or while).

// Therefore, it's linear time: O(n)

// Finally,
// Any time a nested loop does not reprocess the same elements, and instead progressively consumes the input, 
// it can still be O(n).