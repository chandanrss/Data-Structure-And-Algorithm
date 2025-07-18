// Problem statement : Rocky is a software engineer and he is creating his own operating system called “myFirst os”.
// myFirst os  is a GUI (Graphical user interface) based operating system where everything is stored in files and folders.
// He is facing issues on  creating unique folder names for the operating system . Help rocky to create the unique folder name
// for it’s os.If folder name already exists in the system and integer number is added at the name to make it unique.
//  The integer added starts with 1 and is incremented by 1 for each new request of an existing folder name.
//  Given a list of folder names , process all requests and return an array of corresponding folder names.

// Example
// n=5
// foldername= [‘home’ , ‘myfirst’ ,’downloads’, ‘myfirst’, ‘myfirst’]
// Foldername[0] = ‘home’ is unique.
// Foldername[1] = ‘myfirst’ is unique.
// foldername [2] =’downloads’ is unique.
// Foldername[3] =’myfirst’ already exists in our system. So Add1 at the end of the folder name i.e foldername[3] =”myfirst1″
// Foldername[4 ]=’myfirst’ also already exists in our system.So add 2 at the end of the folder name i.e. foldername[4]=”myfirst2″.

// Function description
// Complete the function folderNameSystem In the editor below
// folderNameSystem has the following parameters
// string foldername[n]: an array of folder name string in the order requested
// Returns:
// String[n]:  an array of strings usernames in the order assigned

//
// Constraints
//     1<=n<=10^4
//     1<=length of foldername[i]<20
//     foldername[i] contains only lowercase english letter in the range ascii[a-z]

//
// Input Format:
// The first line contains an integer n , denoting the size of the array usernames Each line i of the n subsequent lines
// (where i<=0<=n) contains a string usernames[i] representing a username request in the order received.

// Sample case 0
// 4
// home
// download
// first
// first

// Sample Output 0
// home
// download
// first
// first1

// Explanation 0
//    foldername[0] = ‘home’ is unique
//    foldername[1]=’download’ is unique
//    foldername[2]= ‘first’ is unique
//    foldername[3]=’first’ is already existing . so add 1 to it and it become first1

var deviceNaming = function (deviceArr) {
  const hashTable = new Map();
  let res = [];
  deviceArr.forEach((element,i) => {
    if (!hashTable.get(element)) {
      res.push(element + " is unique");
      hashTable.set(element, 1);
      console.log("Elelemt",i+1," ", element);
    } else {
      let count = hashTable.get(element);
      let newName = element + count;
      while (hashTable.has(newName)) {
        count++;
        newName = element + count;
      }
      res.push(
        element +
          " is already existing . so add 1 to it and it become " +
          element +
          count
      );

      hashTable.set(element, count+1);
      hashTable.set(newName,1);
      console.log(hashTable);
    }
  });
  return res;
};

console.log(deviceNaming(["home", "download", "first", "first", "first"]));
console.log(deviceNaming(["docs", "docs", "music", "music", "docs", "music", "docs"]));
console.log(deviceNaming(["a", "b", "a", "a", "b", "c", "a", "b", "c"]));
console.log(deviceNaming(["folder", "folder", "folder1", "folder", "folder1", "folder2"]));
console.log(deviceNaming(["test", "test1", "test", "test1", "test2", "test"]));



// Time Complexity:

// Worst case: $ O(n^2) $ (when there are many duplicates of the same name).
// Average case: $ O(n) $ (if duplicates are rare or bounded).


// Space Complexity: $ O(n) $ (for the Map and res array).