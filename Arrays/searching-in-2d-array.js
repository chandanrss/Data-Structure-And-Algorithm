// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.


var searchMatrix = function(matrix, target) {

    let found = false;
    //find total array
    for (let i = 0; i < matrix.length; i++) {
        
        for (let j = 0; j < matrix[i].length; j++) {
            
            if(target === matrix[i][j]){
                found = true;
                break;
            }
            
        }
        
    }
    return found;
};

console.log(searchMatrix([[1,5,5,7],[10,11,16,20],[23,30,34,60]],3));