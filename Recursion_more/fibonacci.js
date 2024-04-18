
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

    //Base case
    if (n == 0) {
        return [];
    }
    else if (n == 1) {
        return [0];
    }
    else if (n == 2) {
        return [0, 1];
    }
    //Recursive case
    else {
        let array = [];
        let nth = fibsRec(n - 2)[fibsRec(n - 2).length - 1] + fibsRec(n - 1)[fibsRec(n - 1).length - 1];
        array.push(nth);
        return array;
    }

}

let iterative = fibs(8);
let recursive = fibsRec(8);

console.log(iterative);
console.log(recursive);

//Side note: Concat creates a new array
// let array1 = [1,2,3]
// let array2 = [4,5,6]
// let array3 = array1.concat(array2);
// console.log(array3)
