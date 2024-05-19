
class HashMap {

    constructor() {
        this.capacity = 89; //Number of buckets in the hash
        this.load_factor = 0.75 //Increase capacity when buckets are 75% full
        this.array = [];
    }

    hash(key) { //Takes a key and returns a hash that is used to access the appropriate bucket

        let hashCode = 0;
            
        const primeNumber = 31;
        
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode = hashCode % this.buckets; //this line makes the hashcode smaller
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

    }

    remove(key) {
        //return true if key is in hashmap and the key and value is cleared
        //otherwise return false as nothing is removed

    }

    length() { //Return number of keys stored in hashmap

    }

    clear() { //Remove all entries in hashmap

    }

    keys() { //Returns an array containing all keys inside hashmap

    }

    value() { //Returns an array containing all values inside hashmap

    }

    entries() { //Returns an array that contains each key, value pair. Example: [[firstKey, firstValue], [secondKey, secondValue]]

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
hash1.set("random_key", "new_value");
let return_null = hash1.get("random_key");
console.log(return_null)