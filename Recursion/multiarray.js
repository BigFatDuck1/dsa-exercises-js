// Given a multi-dimensional integer array, return the total number of integers stored inside this array

function totalIntegers(array) {

    //Counter
    let counter = 0;

    
    for (const element of array) {
            //If not array, base case
        if (Number.isInteger(element) == true) {
            counter += 1;
        }
        else if (typeof element == "object") {
            //Recursive case
            counter += totalIntegers(element);
        }
    }

    return counter;

}

function cleanerSolution(array) {
    
    let counter = 0;
    //Deal with empty arrays
    if (array.length == 0) {
        return 0; //There's nothing inside!
    }
    
    //Using shiftt again...
    let first_element = array.shift();

    //Recursive case: if it is an array, call the function again
    if (typeof first_element == "object") {
        counter += cleanerSolution(first_element);
    }
    else if (typeof first_element == "number") {
        counter += 1;
    }
    //Always call itself again (recurse), because you just removed (shift()) the first element from the array
    return counter + cleanerSolution(array);

}

//Test
let seven =  totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7
console.log(seven);

let result = cleanerSolution([1,2,"foo", [1]]); //3
console.log(result);
