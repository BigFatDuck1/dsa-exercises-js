// Write a function called contains that searches for a value in a nested object. 
//It returns true if the object contains that value.

function contains(object, search) {

    //Recursive case
    for (let key in object) {
        if (typeof object[key] == "object") {
            return contains(object[key], search);
        }
        //Base case
        if (object[key] == search) {
            return true;
        }
    }

    return false;
}

//Test
let nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false

console.log(hasIt);
console.log(doesntHaveIt);