// Write a function called power which takes in a base and an exponent. 
//If the exponent is 0, return 1.

function power(base, exponent) {
    if (exponent == 0) {
        return 1
    }
    else {
        let new_exponent = exponent - 1; //This line is not necessary, it is just clearer to me this way
        return base * power(base, new_exponent);
    }
}

//Test cases
console.log(power(2, 4)); // 16
console.log(power(2, 3)); // 8
console.log(power(2, 2)); // 4 
console.log(power(2, 1)); // 2
console.log(power(2, 0)); // 1
