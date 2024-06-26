
class HashMap {

    constructor() {
        this.capacity = 89; //Number of buckets in the hash
        this.load_factor = 0.75 //Increase capacity when buckets are 75% full
        this.array = [];
        this.current_load = 0;
    }

    hash(key) { //Takes a key and returns a hash that is used to access the appropriate bucket

        let hashCode = 0;
            
        const primeNumber = 31;
        
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            if (hashCode > this.capacity) {
                hashCode = hashCode % this.capacity; //this line makes the hashcode smaller
            }
        }

        return hashCode;
    }

    set(key, value) { 
        //should update the pre-existing value if the key already has a value but set() is called with a new value
        //Deal with collisions! If two keys point to the same bucket, it is a collision!

        let index = this.hash(key);

        if (this.array[index] == undefined) {
            this.array[index] = [key, value]; //array[index][0] is the key, [1] is the value
        }
        else { 
            //Collision?
            if (this.array[index][0] != key) {
                let head = this.array[index];
                //Create a linked list with Javascript built-in arrays
                this.array[index] = [...head, [key, value]] //spread operator to not make any further nested lists
            }
            //If it is not a collision, it is an overwrite operation
            else if (this.array[index][0] == key) {
                this.array[index] = [key, value];
            }
        }
        
        this.loadManagement();
    }

    loadManagement() {
        this.current_load += 1;
        let percent_loaded = this.current_load / this.capacity;
        if (percent_loaded > this.load_factor) {
            this.capacity *= 1.15; //Increase by 15%
        }
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

    has(key) { //If key is in hash map, return true, otherwise return false

        let hashcode = this.hash(key);

        //Return false if key does not exist in hashmap
        if (this.array[hashcode] == undefined) {
            return false;
        }
        else if (this.array[hashcode][0] == key) {
            return true;
        }
        else {
            //Check is it a coincidence that the key generated a hashcode that is identical to another pre-existing key
            let return_value = true;
            for (let i = 0; i < this.array[hashcode].length; i++) { //traverse through the linked list
                if (this.array[hashcode][i][0] != key) {
                    return_value = false; //The key doesn't match, they just happened to generate the same hashcode
                }
                else if (this.array[hashcode][i][0] == key) {
                    return_value = true; //there is a matching key, break out of the for loop
                    break;
                }
            }
            return return_value;
        }
    }

    remove(key) {
        //return true if key is in hashmap and the key and value is cleared
        //otherwise return false as nothing is removed
        if (this.has(key) == false) {
            return false;
        }
        else {
            let hashcode = this.hash(key);
            //No collision, not linked list
            if (this.array[hashcode][0] == key) {
                this.array[hashcode] = undefined; //Remove it
            }
            else {
                for (let i = 0; i < this.array[hashcode].length; i++) {
                    if (this.array[hashcode][i][0] == key) {
                        this.array[hashcode][i] = undefined; //Remove it
                        break;
                    }
                }
            }
        }

    }

    length() { //Return number of keys stored in hashmap
        let length = 0;
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] != undefined) {
                length += 1;
            }
        }

        return length;
    }

    clear() { //Remove all entries in hashmap
        this.array.length = 0;
    }

    keys() { //Returns an array containing all keys inside hashmap
        let array_of_keys = [];
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] != undefined) {
                if (this.array[i].length == 2) { //single element, not linked list
                    array_of_keys.push(this.array[i][0])
                }
                else { //it is a linked list
                    this.array[i].forEach(element => {
                        array_of_keys.push(element[0]);
                    });
                }
            }
        }
        return array_of_keys;
    }

    value() { //Returns an array containing all values inside hashmap
        let array_of_values = [];
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] != undefined) {
                if (this.array[i].length == 2) { //single element, not linked list
                    array_of_values.push(this.array[i][1])
                }
                else { //it is a linked list
                    this.array[i].forEach(element => {
                        array_of_values.push(element[0]);
                    });
                }
            }
        }
        return array_of_values;
    }

    entries() { //Returns an array that contains each key, value pair. Example: [[firstKey, firstValue], [secondKey, secondValue]]
        let array = [];
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] != undefined) {
                if (this.array[i].length == 2) { //single element, not linked list
                    array.push(this.array[i]);
                }
                else { //it is a linked list
                    this.array[i].forEach(element => {
                        array.push(element);
                    });
                }
            }
        }
        return array;
    }

    outOfBoundsIndex(index, buckets) { //Buckets is the array containing everything
        if (index < 0 || index >= buckets.length) {
            throw new Error("Trying to access index out of bound");
        }
        else {
            return "Index within bounds";
        }
    }

}

// Extra Credit:
// Create a HashSet class or factory function that behaves the same as a HashMap but only contains keys with no values.

//Test
let hash1 = new HashMap();
hash1.set("random_key", "random_value");
hash1.set("random_key", "new_value"); //overwrites "random_key"
// let return_null = hash1.get("random_key");
// console.log(return_null)
hash1.set("no_key", "no_value");
// hash1.remove("no_key");
//hash1.clear();
// let has = hash1.has("no_key");
// console.log(has);
// let length = hash1.length();
// console.log(length);
let keys = hash1.keys();
console.log(keys)
let values = hash1.value();
console.log(values);
let all = hash1.entries();
console.log(all);