
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

}

let iterative = fibs(8);

console.log(iterative);