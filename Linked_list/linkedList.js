

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
            this.size += 1;
        }
        //Find last node and make it point to this node
    }

    size() {
        return this.size;
    }

    head() {
        return this.firstNode;
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

new_list.append("Lemon");

let first = new_list.head();
console.log(first);