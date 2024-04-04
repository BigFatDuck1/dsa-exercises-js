// Write a function called contains that searches for a value in a nested object. 
//It returns true if the object contains that value.

function nestedObject(object, search) {
    
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