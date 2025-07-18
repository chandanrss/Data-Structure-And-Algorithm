// Problem statement : The principal has a problem with repetitions. Everytime someone sends the same email twice he becomes
// angry and starts yelling. His personal assistant filters the mails so that all the unique mails are sent only once, and
//  if there is someone sending the same mail again and again, he deletes them. Write a program which will see the list of
//  roll numbers of the student and find how many emails are to be deleted.

// Sample Input:
//     6
//     1
//     3
//     3
//     4
//     3
//     3

// Sample Output:
//     3

function countDuplicateEmails(input) {
  const n = input[0];
  const rollNumbers = input.slice(1);
  const seen = new Set();
  let duplicates = 0;

  for (let roll of rollNumbers) {
    if (seen.has(roll)) {
      duplicates++;
    } else {
      seen.add(roll);
    }
  }

  return duplicates;
}

// Example usage:
const input = [6, 1, 3, 3, 4, 3, 3];
console.log(countDuplicateEmails(input)); // Output: 3
