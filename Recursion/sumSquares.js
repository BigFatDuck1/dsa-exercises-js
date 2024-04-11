// Write a function that sums squares of numbers in list that may contain more lists

function sumSquares(array) {

    let sum = 0;

    //Exit case
    if (array.length == 0) {
        return 0;
    }

    array.forEach(element => {
        if (Array.isArray(element) == true) {
            sum += + sumSquares(element);
        }
        else if (typeof element == "number") {
            sum += element * element;
        }
    });
    return sum;

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