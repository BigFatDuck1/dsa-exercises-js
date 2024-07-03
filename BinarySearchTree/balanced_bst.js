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

    getValue() {
        return this.value;
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

        let root = this.recurseTree(array);

        //Set Tree property
        this.root = root;

        return root;

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
                let left = new Node(array[0]);
                let right = new Node(array[2]);

                middle_node.setLeft(left);
                middle_node.setRight(right);
            }
            else if (array.length == 2) {
                let left = new Node(array[0]);
                middle_node.setLeft(left);
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
        if (node === undefined) {
          return "Printed";
        }
        if (node.right !== undefined) {
            this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);

        if (node.left !== undefined) {
            this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
        
    };

    insert(value) {
        let root = this.root;

        function traverse(node, value) {
            //if there is a  matching node, return false
            //if no node is found, return the node, that node will become the parent

            //If node already exists
            if (node.value == value) {
                return false;
            }
            //Base case: reached end node i.e. child which is not a parent
            if (node.left == undefined || node.right == undefined) {
                //1. if both left and right are empty, this node is the parent node
                if (node.left == undefined && node.right == undefined) {
                    return node;
                }
                //2. Right node doesn't exist, left node exists
                if (node.right == undefined && node.left != undefined) {
                    //belongs to parent node
                    if (value > node.value) {
                        return node; //value should be inserted at its (parent's) right
                    }
                    //belongs to child
                    return node.left;
                }
                //3. Repeat for inverse
                if (node.left == undefined && node.right != undefined) {
                    //belongs to parent node
                    if (value < node.value) {
                        return node; //value should be inserted at its (parent's) left
                    }
                    //belongs to child
                    return node.right;
                }
            }
            //Recursive case
            else {
                if (value > node.value) { //Go right
                    return traverse(node.right, value);
                }
                else if (value < node.value) { //Go left
                    return traverse(node.left, value);
                }
            }
        }

        let parent = traverse(root, value);
        if (parent == false) {
            return "Value already exists in tree.";
        }
        else {
            if (value > parent.value) {
                parent.right = new Node(value);
            }
            else if (value < parent.value) {
                parent.left = new Node(value);
            }
        }
    }

    deleteItem(value) {
        //Remember to include several cases e.g.
        //does the node have children? what about no children?

        //Return both parents and child
        function parentChild(node, value, parent) {
            //Base case - value found
            if (node.value == value) {
                return [parent, node];
            }
            //Recursive case 
            else if (node.value != value) {
                //Value doesn't exist in tree
                if (node.left == undefined && node.right == undefined) {
                    return [false, false];
                }
                else if (value > node.value && node.right != undefined) { //go right
                    return parentChild(node.right, value, node);
                }
                else if (value < node.value && node.left != undefined) { //go left
                    return parentChild(node.left, value, node);
                }
                else {
                    return [false, false];
                }
            }
        }

        let [parent_node, target_node] = parentChild(this.root, value, undefined); //if the root is the value being deleted, the function will return [undefined, this.root]
        
        //Error if value doesn't exist in tree
        if (target_node == false) {
            console.log("Item to be deleted doesn't exist in tree.")
            return "Value doesn't exist";
        }
        //No children
        if (target_node.left == undefined && target_node.right == undefined) {
            if (parent_node.left == target_node) {
                parent_node.left = undefined; //Detach child from parent
                target_node = undefined; //Set child as undefined to delete it
            }
            else if (parent_node.right == target_node) {
                parent_node.right = undefined; //Detach child from parent
                target_node = undefined; //Set child as undefined to delete it
            }
        }
        //Root is deleted
        else if (parent_node == undefined) {
            //TODO: what to do if parent_node is undefined (so the deleted node is the root node)
            recurseThroughTree(this.root);
            this.root = undefined;

            function recurseThroughTree(node, node_left, node_right) {
                if (node.left == undefined && node.right == undefined) {
                    //Already reached the end child node
                    node = undefined //clear node itself
                    return;
                }
                //Recursive case
                else {
                    if (node.left != undefined) {
                        recurseThroughTree(node.left, node.left.left, node.left.right);
                        node.left = undefined;
                    }
                    if (node.right != undefined) {
                        recurseThroughTree(node.right, node.right.left, node.right.right);
                        node.right = undefined;
                    }
                    //Clear the first node that started the recursion
                    node = undefined;
                }
            }
        }
        //Have children
        else {
            burnChildren(target_node, parent_node);
        }

        function burnChildren(node, parent) {
            //Recursive case
            if (node.left != undefined) {
                burnChildren(node.left, node);
                clear(node.left, node);
            }
            if (node.right != undefined) {
                burnChildren(node.right, node);
                clear(node.right, node);
            }
            //Base case
            if (node.left == undefined && node.right == undefined) {
                clear(node, parent);
                return;
            }

            function clear(child_node, parent_node) {
                //Detach parent first
                if (parent_node.left == child_node) {
                    parent_node.left = undefined;
                }
                else {
                    parent_node.right = undefined;
                }
                //Clear child itself
                child_node = undefined;
            }
        }


    }

    find(value) {
        //returns node with given value
        function recurseFind(node, value) {
            //In case the node is already undefined, throw an error
            if (node == undefined) {
                return "Error: node undefined";
            }
            //Base case - value found
            if (node.value == value) {
                return node;
            }
            //Recursive case 
            else if (node.value != value) {
                //Value doesn't exist in tree
                if (node.left == undefined && node.right == undefined) {
                    return false;
                }
                else if (value > node.value && node.right != undefined) { //go right
                    return recurseFind(node.right, value);
                }
                else if (value < node.value && node.left != undefined) { //go left
                    return recurseFind(node.left, value);
                }
                else {
                    return false;
                }
            }
        }

        return recurseFind(this.root, value);

    }

    levelOrder(callback) {
        //traverse tree in breadth-first level order
        //return each node and pass it to callback
        //only return the array of values traversed if no callback provided
        let queue = [];
        //Initialize queue with root node
        if (this.root == undefined) {
            return "Root undefined";
        }
        queue.unshift(this.root);
        //while loop that traverses the tree BFS
        let level = [];
        let children = [];
        let output = [];
        while (queue.length > 0) { //while it is not empty
            let first_in_queue = queue.shift();
            //Pass into callback if it exists
            if (callback != undefined) {
                first_in_queue = callback(first_in_queue);
            }
            level.push(first_in_queue);
            //Push the children into the array
            if (first_in_queue.left != undefined) {
                children.push(first_in_queue.left);
            }
            if (first_in_queue.right != undefined) {
                children.push(first_in_queue.right);
            }
            //If queue empty, it means the entire level has already traversed, moved to next level
            if (queue.length == 0) {
                //Push the array that contains all the elements of that level into output
                output.push(level);
                //Push children into queue
                children.forEach((element) => {
                    queue.push(element);
                })
                //Clear level and children for next level
                children = [];
                level = [];
            }

        }

        return output;
    }

    inOrder(callback) {
        //In order: left -> root -> right

        let result = [];

        function recurseInOrder(node) {
            //Base case:
            //if this node doesn't exist, go back to its parent, that parent node is childless and thus the bottommost leaf of the tree
            if (node == undefined) {
                return;
            }

            //Recursive case: go left first
            recurseInOrder(node.left);

            if (callback != undefined) {
                node = callback(node); //Modify node based on callback provided
            }
            result.push(node.value); // * change this to node or node.value dpeending on what you want to return

            recurseInOrder(node.right);
        }

        if (this.root == undefined) {
            return "Root undefined";
        }
        else {
            recurseInOrder(this.root);
            return result;
        }
    }

    preOrder(callback) {
        //Preorder: root -> left -> right
        let result = [];

        function recursePreOrder(node) {
            //Base case
            if (node == undefined) {
                return;
            }
            //Recursive case

            //preorder: give root first
            if (callback != undefined) {
                node = callback(node);
            }
            result.push(node.value) // * change this to node or node.value dpeending on what you want to return

            //then left subtree
            recursePreOrder(node.left);
            //then right subtree
            recursePreOrder(node.right);
        }

        if (this.root == undefined) {
            return "Root undefined";
        }
        else {
            recursePreOrder(this.root);
            return result;
        }
    }

    postOrder(callback) {
        //Postorder: left -> right -> root
        let result = [];

        function recursePostOrder(node) {
            //Base case
            if (node == undefined) {
                return;
            }
            //Recursive case

            //postorder: give left first
            recursePostOrder(node.left);
            //then right
            recursePostOrder(node.right);
            if (callback != undefined) {
                node = callback(node);
            }
            result.push(node.value) // * change this to node or node.value dpeending on what you want to return

        }

        if (this.root == undefined) {
            return "Root undefined";
        }
        else {
            recursePostOrder(this.root);
            return result;
        }

    }

    height(node) {
        //return the height of the node:
        //height is from the given node, the longest path to the leaf node
        let array_of_heights = [];

        function recurseToBottom(node, distance=-1) {
            distance += 1;
            if (node == undefined) {
                distance -= 1; //Because the undefined node added 1 to the distance through the function call
                array_of_heights.push(distance);
                return;
            }
            
            recurseToBottom(node.left, distance);
            
            recurseToBottom(node.right, distance);
        }

        if (this.root == undefined) {
            return "Root undefined";
        }
        recurseToBottom(node);

        return Math.max(...array_of_heights);

    }

    depth(node) { //I have opted to pass in the value instead of the node itself as the argument/parameter
        //return number of edges from root to the given node
        let root;
        if (this.root == undefined) {
            return "Root does not exist";
        }
        else {
            root = this.root;
        }

        let global_distance = 0; //the recursive function will edit this variable

        function findWithDistance(node, distance, target) { //target is the (node) argument that is passed into the depth(node) function
            //Base case
            if (node == undefined) {
                return;
            }
            else if (node.value == target) {
                global_distance = distance;
                return [node, distance]
            }
            //Recursive case
            if (node.value != target) {
                distance += 1;
                findWithDistance(node.left, distance, target);
                findWithDistance(node.right, distance, target);
            }
        }

        findWithDistance(root, 0, node);

        return global_distance;
    
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

let test = () => {
    let new_tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]); //11 unique elements
    //let new_tree = new Tree([1,2,3,4]);
    // let new_tree = new Tree([1,2,3]);
    let root = new_tree.buildTree(new_tree.array);
    // new_tree.prettyPrint(root);

    //Insert new value
    //new_tree.insert(10);
    //new_tree.insert(1000);
    //new_tree.deleteItem(324);
    //new_tree.deleteItem(8); //Delete the root node
    let find_false = new_tree.find(99); // false
    let find = new_tree.find(23);
    //new_tree.prettyPrint(root);
    new_tree.prettyPrint(new_tree.root);
    //levelOrder
    function call(node) { //callback function to be passed into levelOrder
        node.value *= 100;
        return node;
    }
    // let level_order_array = new_tree.levelOrder(call);
    // console.log(level_order_array);

    // let inOrder = new_tree.inOrder();
    // console.log(inOrder);

    // let preOrder = new_tree.preOrder();
    // console.log(preOrder);

    // let postOrder = new_tree.postOrder();
    // console.log(postOrder);

    // let array = new_tree.height(new_tree.root);
    // console.log(array);

    let depth = new_tree.depth(1);
    console.log(depth);

    //console.log(find_false);
    //console.log(find);
}

let log = test();
// console.log(log);