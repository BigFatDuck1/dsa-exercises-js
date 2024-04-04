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

//Test
let seven =  totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7
console.log(seven);

// let result = totalIntegers([1,2,"foo", [1]]);
// console.log(result);