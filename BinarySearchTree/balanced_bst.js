//Balanced binary search tree

class Node {
    
    constructor(left, right) {
        this.left = left;
        this.right = right;
    }


}

class Tree {

    constructor() {
        this.root;
    }

    buildTree(array) {
        //Takes array
        //and turns it in a balanced binary search tree with Node objects (sort and remove duplicates!)
        //then return the level-0 root node
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
