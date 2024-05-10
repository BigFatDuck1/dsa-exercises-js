

class LinkedList {

    constructor() {
        this.firstNode = null;
        this.list_size = 0;
    }

    //Append: add node to end of list
    append(value) {
        let newNode = new Node();
        //By default, all newly inserted nodes do not point to a next node because there is no next node
        newNode.setValue(value);
        //Set first node if it doesn't exist
        if (this.firstNode == null) {
            this.firstNode = newNode;
        }
        //Find last node and make it point to this node
        else {
            let lastNode = this.findNextNodeUntilNoMore(this.firstNode);
            lastNode.nextNode = newNode;
        }
        //Change size
        this.list_size += 1;
    }

    prepend(value) {
        let newNode = new Node();
        newNode.setValue(value);
        //Set it as first node if there is no first node
        if (this.firstNode == null) {
            this.firstNode = newNode;
        }
        //Else store first node and set this as first node...
        else {
            let initial_first_node = this.firstNode;
            //then make this node point to the previous first node
            newNode.nextNode = initial_first_node;
            this.firstNode = newNode;
        }
        //Change size
        this.list_size += 1;
    }

    size() {
        return this.list_size;
    }

    head() {
        return this.firstNode;
    }

    tail() {
        return this.findNextNodeUntilNoMore(this.firstNode);
    }

    at(index) {
        //Return error if out of bounds
        if (index >= this.size()) {
            return "Error";
        }
        //Return head
        if (index == 0) {
            return this.head();
        }

        let i = 1;
        let current_node = this.head();
        while (i <= index) {
            current_node = current_node.nextNode;
            i += 1;
        }
        return current_node;
    }

    pop() { //Remove last element from list
        let penultimate_index = this.size() - 2;
        let penultimate_node = this.at(penultimate_index);
        penultimate_node.nextNode = null; //Leaves the final node floating in memory to be collected by garbage management
        this.list_size -= 1;
    };

    contains(value) {
        let current_node = this.head();

        function searcher(node, search_value) {
            if (node.value == search_value) {
                return true;
            }
            else if (node.nextNode == null) {
                return false;
            }
            else {
                return searcher(node.nextNode, search_value);
            }
        }

        return searcher(current_node, value);
    }

    find(value) {
        let current_node = this.head();
        let i = 0;

        function searcher(node, search_value, index) {
            if (node.value == search_value) {
                return index;
            }
            else if (node.nextNode == null) {
                return false;
            }
            else {
                index += 1;
                return searcher(node.nextNode, search_value, index);
            }
        }

        return searcher(current_node, value, i);
    }

    toString() {
        let current_node = this.head();

        function parser(node, string) {
            if (node.nextNode == null) {
                string += `(${node.value}) -> null`;
                return string;
            }
            else {
                string += `(${node.value}) -> `;
                return parser(node.nextNode, string);
            }
        }

        return parser(current_node, "");
    }

    findNextNodeUntilNoMore(node) {
        if (node.nextNode == null) {
            return node;
        }
        else {
            let next_node = node.nextNode;
            //Recursive call
            return this.findNextNodeUntilNoMore(next_node); //returns the last node
        }
    }

}

class Node {

    constructor() {
        this.value = null;
        this.nextNode = null;
    }


    setValue(value) {
        this.value = value;
    }
    
    setPointTo(node) {
        this.nextNode = node;
    }
}

let new_list = new LinkedList;

new_list.append("one");
new_list.append("two");
new_list.append("three");
new_list.append("four");
new_list.append("five");
//new_list.prepend("New first node");

let first = new_list.head();
let last = new_list.tail();
//console.log("First node: ", first, "\n");
//console.log("Last node: ", last, "\n");

let at_index = new_list.at(2); //Should return third node i.e. "three"
// console.log(at_index); 

// new_list.pop();
// new_list.pop();
// last = new_list.tail();
// console.log(last);

// let result1 = new_list.contains("five");
// let result2 = new_list.contains("sixty");
// console.log(result1); //true
// console.log(result2); //false

// let result1 = new_list.find("two");
// let result2 = new_list.find("sixty");
// console.log(result1); //1
// console.log(result2); //false

let string = new_list.toString();
console.log(string);