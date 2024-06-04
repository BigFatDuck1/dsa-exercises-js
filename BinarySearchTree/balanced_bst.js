//Balanced binary search tree

class Node {
    
    constructor(value) {
        this.value = value; //Value of the node
        this.left; //Left is always smaller than this node
        this.right; //Right is always bigger than this node
    }

    setLeft(left) {
        this.left = left;
    }

    setRight(right) {
        this.right = right;
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


    }

    recurseTree(array) {
        //GIven a sorted array
        //find middle element
        //put smaller than middle elements to the left and larger than middle element to the right
        //if left/right > 1 then recursive call again
        let middle_index = Math.floor(array.length/2);
        let middle_element = array[middle_index];
        let middle_node = new Node(middle_element);

        //Call base case if there are only two or three elements in the array
        if (array.length <= 3) {
            if (array.length == 3) {
                middle_node.setLeft(array[0]);
                middle_node.setRight(array[2]);
            }
            else if (array.length == 2) {
                middle_node.setLeft(array[0]);
            }
            else if (array.length == 1) {
                //Do nothing, because there is only one element so by default it is the middle node
            }

            return middle_node;
        }
        //Recursive case
        else {
            let left = this.recurseTree(array.slice(0, middle_index));
            let right = this.recurseTree(array.slice(middle_index + 1));

            middle_node.setLeft(left); //Since left returns the middle node, set this node as the left node of the root node
            middle_node.setRight(right);

            return middle_node;
        }

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
