// Write a function that sums squares of numbers in list that may contain more lists

function sumSquares(array) {
    
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