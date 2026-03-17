class Node {
  constructor(x) {
    this.data = x;
    this.children = [];
  }
}

function addChild(parent, child) {
  parent.children.push(child);
}

let root = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

addChild(root, node2);
addChild(root, node3);
addChild(node2, node4);
addChild(node2, node5);


// Function to print parent of each node 
function printParent(node, parent) {
  if (parent === null) {
    console.log(node.data + "---> root");
  } else {
    console.log(node.data + "--->" + parent.data);
  }

  for(let child of node.children){
    printParent(child, node);
  }
}

function printChildren(node){
    let str  = node.data  + " --> ";
    for(let child of node.children){
        // console.log(child.data);
        str+= child.data + " ";
    }
    console.log(str);

    for(let child of node.children){
        printChildren(child);
    }

}

function printLeafNodes(node){
    
    if(node.children.length == 0){
        // process.stdout.write(node.data + " ");
        console.log(node.data);
        return;
    }
    
    for(let child of node.children){
        printLeafNodes(child);
    }
}


// Function to print degrees of each node
function printDegrees(node, parent) {
    let degree = node.children.length;
    if (parent !== null) 
        degree++;
    console.log(node.data + " -> " + degree);

    for (let child of node.children)
        printDegrees(child, node);
}


// console.log("Parents of each node:");
// printParent(root, null);

// console.log("Children of each node");
// printChildren(root);

console.log("Print All Leaf Node");
printLeafNodes(root);

console.log("Degrees of nodes:");
printDegrees(root, null);