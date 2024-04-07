// Write a function that sums squares of numbers in list that may contain more lists

function sumSquares(array) {

    let sum = 0;
    //Exit if empty array
    if (array.length == 0) {
        return 0;
    }
    let first_element = array.shift();
    //Base case
    if (typeof first_element == "number") {
        sum += first_element * first_element;
    }
    //Recursive case
    else if (typeof first_element == "object") {
        sumSquares(first_element);
    }

    return sum + sumSquares(array);

}


//Test
let l = [1,2,3]; 
console.log(sumSquares(l)); // 1 + 4 + 9 = 14

l = [[1,2],3]; 
console.log(sumSquares(l)); // 1 + 4 + 9 = 14

l = [[[[[[[[[1]]]]]]]]] 
console.log(sumSquares(l)); // 1 = 1

l = [10,[[10],10],[10]] 
console.log(sumSquares(l)); // 100 + 100 + 100 + 100 = 400