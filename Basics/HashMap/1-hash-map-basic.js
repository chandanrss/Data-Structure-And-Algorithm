
// Hash Table: Explanation and Uses
// A Hash Table (or Hash Map) is a data structure that stores key-value pairs and provides efficient
// retrieval in O(1) average time complexity using a hash function.



const hashTable = new Map();

// Insert values
hashTable.set("Alice", 1001);
hashTable.set("Bob", 1002);

// Retrieve values
console.log(hashTable.get("Alice")); // Output: 1001


// Key Components
// Hash Function → Converts a key into an array index.

// Buckets → Array slots where values are stored.

// Collision Handling → Methods to handle cases when multiple keys hash to the same index. -> Chainning Method