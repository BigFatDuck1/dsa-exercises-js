

class LinkedList {

    constructor() {
        this.firstNode = null;
        this.size = 0;
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
    }

    size() {
        return this.size;
    }

    head() {
        return this.firstNode;
    }

    tail() {
        return this.findNextNodeUntilNoMore(this.firstNode);
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

let first = new_list.head();
let last = new_list.tail();
console.log(first);
console.log(last);