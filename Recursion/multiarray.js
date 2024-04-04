// Given a multi-dimensional integer array, return the total number of integers stored inside this array

function totalIntegers(array) {

    //Counter
    let counter = 0;

    let contains_array = false;
    for (arr of array) {
        if (typeof arr == "object") {
            contains_array = true;
            break;
        }
    }
    //Base case
    if (contains_array == false) {
        //Does not contain any array, it is the deepest array
        array.forEach(element => {
            if (Number.isInteger(element) == true) {
                counter += 1;
            }
        });

        return counter;
    }

    //Recursive case
    else {
        return "aborted";
    }

}

//Test
// let seven =  totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7
// console.log(seven);

let result = totalIntegers([1,2,"foo", ["additional array"]]);
console.log(result);