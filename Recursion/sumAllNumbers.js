// Write a function called sumRange. 
//It will take a number and return the sum of all numbers from 1 up to the number passed in.

// Sample: sumRange(3) returns 6, since 1 + 2 + 3 = 6.

function sumRange(int) {
    if (int == 1) {
        return 1;
    }
    else {
        return int + sumRange(int - 1);
    }
}

let test = sumRange(3)
console.log(test);