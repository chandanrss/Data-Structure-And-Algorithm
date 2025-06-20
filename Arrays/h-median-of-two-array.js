// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

var findMedianSortedArrays = function (nums1, nums2) {
  let i = (j = 0);
  tempArr = [];
  while (i < nums1.length || j < nums2.length) {
    if (j < nums2.length) {
      if (nums1[i] < nums2[j]) {
        tempArr.push(nums1[i]);
        console.log(tempArr);
        i++;
      } else {
        tempArr.push(nums2[j]);
        j++;
      }
    }else{
        tempArr.push(nums1[i]);
        i++;
    }
  }
  let median = 0;
  let med = tempArr.length % 2;
  console.log("med", med);
  if(med){
    return tempArr[(tempArr.length-1)/2];
  }else{
    let centerIndex = tempArr.length/2;
   return (tempArr[centerIndex]+tempArr[centerIndex-1])/2;
  }
  console.log(median);

  return tempArr;
  
};

console.log(findMedianSortedArrays([1,2],[3,4,5,6]));



//Optimized way
var findMedianSortedArrays = function(nums1, nums2) {
    const totalLen = nums1.length + nums2.length;
    const isOdd = totalLen % 2 === 1;
    const mid = Math.floor(totalLen / 2);

    let i = 0, j = 0, count = 0;
    let prev = 0, curr = 0;

    while (count <= mid) {
        prev = curr;
        if (i < nums1.length && (j >= nums2.length || nums1[i] < nums2[j])) {
            curr = nums1[i];
            i++;
        } else {
            curr = nums2[j];
            j++;
        }
        count++;
    }

    if (isOdd) {
        return curr;
    } else {
        return (prev + curr) / 2;
    }
};

console.log(findMedianSortedArrays([1,2],[3,4,5,6])); // Output: 3.5
console.log(findMedianSortedArrays([1,3],[2]));       // Output: 2
console.log(findMedianSortedArrays([1,2],[3,4]));     // Output: 2.5