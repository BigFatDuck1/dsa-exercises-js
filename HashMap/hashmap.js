
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

            }
            //If it is not a collision, it is an overwrite operation
            else if (this.array[index][0] == key) {
                this.array[index] = value;
            }
        }


    
    }

    get(key) { //Returns value associated with key, otherwise return null

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