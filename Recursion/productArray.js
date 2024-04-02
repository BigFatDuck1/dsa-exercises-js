// Write a function called productOfArray which takes in an array of numbers and returns the product of them all

function productOfArray(array) {
    if (array.length == 1) {
        return array[0];
    }
    else {
        let first = array[0];
        array.shift();
        return first * productOfArray(array);
    }
}


let six = productOfArray([1,2,3]) // 6
let sixty = productOfArray([1,2,3,10]) // 60

console.log(six);
console.log(sixty);