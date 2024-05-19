//keyChecker() function in the hashmap.js file
//if there's a collision, the same bucket (array index) will hold multiple key-value pairs that generate the same hash
//keyChecker() traverses through the linked list searching for the right key value pair

class fakeHash {
    constructor() {
        this.array = [ //Fake hashmap, it is pre-generated
            undefined,
            undefined,
            //Linked list
            [
                [
                    "key1", "value1" 
                ],
                [
                    "key2", "value2"
                ],
                [
                    "key3", "value3"
                ],
            ]
        ]
    }

    hash(key) {
        return 2; //Fake hash function, always return 2
    }

    get(key) { //Returns value associated with key, otherwise return null
        let hashcode = this.hash(key);

        //Return null if no such value exists
        if (this.array[hashcode] == undefined) {
            return null;
        }
        else if (this.array[hashcode][0] == key) { //It's not a linked list, there is only one key-value pair (one-to-one mapping)
            return this.array[hashcode][1]; //return the value 
        }
        else { //It's a linked list, call a recursive function to keep looking for the key
            return this.keyChecker(key, hashcode, 0);
        }
    }

    keyChecker(key, hash, n) {
        if (this.array[hash][n][0] == key) {
            return this.array[hash][n];
        }
        else {
            return this.keyChecker(key, hash, n + 1);
        }
    }
}

let hash1 = new fakeHash;
let value1 = hash1.get("key1");
console.log(value1);
let value3 = hash1.get("key3");
console.log(value3);