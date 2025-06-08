// Sort a Stack using Recursion
// Given a stack, the task is to sort it using recursion.

// Example: 

// Input: [3 2 1]
// Output: [3 2 1]
// Explanation: The given stack is sorted know 3 > 2 > 1

// Input: [11 2 32 3 41]
// Output: [41 32 11 3 2]


function sortedInsert(s, x) {
    if (s.length === 0 || x > s[s.length - 1]) {
        s.push(x);
        return;
    }
    let temp = s.pop();
    sortedInsert(s, x);
    s.push(temp);
}

function sort(s) {
    if (s.length > 0) {
        let x = s.pop();
        sort(s);
        sortedInsert(s, x);
    }
}

let s = [];

s.push(11);
s.push(2);
s.push(32);
s.push(3);
s.push(41);

sort(s);

let result = '';
while (s.length > 0) {
    result += s.pop() + ' ';
}

console.log(result.trim());