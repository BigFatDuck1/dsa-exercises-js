//Balanced binary search tree

class Node {
    
    constructor() {
        this.value; //Value of the node
        this.left; //Left is always smaller than this node
        this.right; //Right is always bigger than this node
    }


}

class Tree {

    constructor(array) {
        this.array = array;
        this.root;
    }

    buildTree(array) {
        //Takes array
        //and turns it in a balanced binary search tree with Node objects (sort and remove duplicates!)
        //then return the level-0 root node
        array = removeDuplicates(array);
        array = mergeSort(array);
        //Find middle element
        let middle_element = array[Math.floor(array.length/2)];

    }

    prettyPrint(node, prefix = "", isLeft = true) {
        if (node === null) {
          return;
        }
        if (node.right !== null) {
          prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
          prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
    };

    insert(value) {

    }

    deleteItem(value) {
        //Remember to include several cases e.g.
        //does the node have children? what about no children? 
    }

    find(value) {
        //returns node with given value
    }

    levelOrder(callback) {
        //traverse tree in breadth-first level order
        //return each node and pass it to callback
        //only return the array of values traversed if no callback provided
    }

    inOrder(callback) {

    }
    preOrder(callback) {

    }
    postOrder(callback) {

    }

    height(node) {
        //return the height of the node:
        //height is from the given node, the longest path to the leaf node

    }

    depth(node) {
        //return number of edges from root to the given node
    
    }

    isBalanced() {
        //Balanced tree means the different of right and left subtree is only 1 or less
    }

    reBalance() {
        //Hint: provide new array to buildTree()
    }

}

function mergeSort(array) {

    //Base case
    //If array only has one element, it is already sorted
    if (array.length == 1 || array.length == 0) {
        return array;
    }
    
    //Recursive case
    //Split first
    let middle_point;

    if (array.length % 2 == 0 ) { //even
        middle_point = array.length / 2;
    }
    else if (array.length % 2 == 1) { //odd
        middle_point = (array.length + 1) / 2;
    }

    let l = array.slice(0, middle_point);
    let r = array.slice(middle_point);

    let left = mergeSort(l); //if l is just one element, then it will return that element because it is already maximally split
    let right = mergeSort(r);

    //Sort
    let sorted = [];
    let left_index = right_index = 0;
    while (left.length > 0 && right.length > 0) {
        if (left[left_index] < right[right_index]) {
            let left_element = left.shift();
            sorted.push(left_element);
        }
        else if (right[right_index] < left[left_index]) {
            let right_element = right.shift();
            sorted.push(right_element);
        }
    }
    sorted = sorted.concat(left);
    sorted = sorted.concat(right)
    

    return sorted;

}

function removeDuplicates(array) {
    let new_array = [];
    for (let i = 0; i < array.length; i++) {
        if (new_array.includes(array[i])) {
            //Do nothing
        }
        else {
            new_array.push(array[i]);
        }
    }
    return new_array;
}

//Driver script (test)
//1. Create a binary search tree from an array of random numbers < 100. 
    //You can create a function that returns an array of random numbers every time you call it if you wish.
// 2. Confirm that the tree is balanced by calling isBalanced.
// 3. Print out all elements in level, pre, post, and in order.
// 4. Unbalance the tree by adding several numbers > 100.
// 5.Confirm that the tree is unbalanced by calling isBalanced.
// 6. Balance the tree by calling rebalance.
// 7. Confirm that the tree is balanced by calling isBalanced.
// 8. Print out all elements in level, pre, post, and in order.

let driverScript = () => {

}

driverScript();
