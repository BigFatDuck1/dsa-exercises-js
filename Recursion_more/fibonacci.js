
//Iterative function

function fibs(n) {

    let n1 = 0;
    let n2 = 1;

    let return_array = [];

    for (let i = 0; i < n; i++) {

        //First digit
        if (i == 0) {
            return_array[i] = n1;
        }
        //Second digit
        else if (i == 1) {
            return_array[i] = n2;
        }
        else {
            return_array[i] = return_array[i - 1] + return_array[i - 2];
        }
    }

    return return_array;

}

//Recursive function

function fibsRec(n) {

    let results = [];

    //the real recursive function
    function fibsRecursive(number) { //number is the nth fibonacci number given [0,1,1,2,3,5,8...]
        //Base case
        if (number == 0) {
            return 0;
        }
        else if (number == 1) {
            return 1;
        }
        //Recursive case
        else {
            let recurse = fibsRecursive(number - 2) + fibsRecursive(number - 1);
            results.push(recurse);
            return recurse;
        }

    }


    results.push(0);

    fibsRecursive(n)
    return results;
}

let iterative = fibs(3);
let recursive = fibsRec(3);

console.log(iterative);
console.log(recursive);

//Side note: Concat creates a new array
// let array1 = [1,2,3]
// let array2 = [4,5,6]
// let array3 = array1.concat(array2);
// console.log(array3)
