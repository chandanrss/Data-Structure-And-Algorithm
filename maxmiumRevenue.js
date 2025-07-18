// Problem statement : Amit is a salesman who wishes to know the maximum revenue received from a given item of the N products each day .
//  Amit has a sales record of N products for M days.Helo amit to find the highest revenue received each day.

// Input : 
// The first line of the input consists of two space-separated integers- day(M) and item(N) representing the days and 
// the products in the sales record.
// The next M lines consist of N space separated integers representing the sales revenue from each product each day.

// Output: 
// Print m space-separated integers representing the maximum revenue received each day .

// Example Input:
// 3 4
// 101 123 234 344
// 143  282 499 493
// 283 493 202 304

// Output:
// 344 499 493

// Explanation:
// The maximum revenue received on the first day is 344 , followed by a maximum revenue of 499 on the second day and a maximum revenue of 493 on the third day.

function maxRevenuePerDay(sales) {
    // sales: array of arrays, each inner array is revenues for a day
    return sales.map(daySales => Math.max(...daySales));
}

// Example usage:
const sales = [
    [101, 123, 234, 344],
    [143, 282, 499, 493],
    [283, 493, 202, 304]
];
console.log(maxRevenuePerDay(sales).join(' ')); // Output: 344 499 493
