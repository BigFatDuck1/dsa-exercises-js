// The function should return an array containing repetitions of the number argument. 
//For instance, replicate(3, 5) should return [5,5,5]. 
//If the times argument is negative, return an empty array.

function replicate(times, number) {
   
    let array = [];

    //Base case
    if (times <= 0) {
        return array;
    }
    //Recursive case
    else {
        array.push(number);
        //Concats the number again 
        let next = replicate(times - 1, number);
        array = array.concat(next);
        return array;
    }

}

//Test
console.log(replicate(3, 5)) // [5, 5, 5]
console.log(replicate(1, 69)) // [69]
console.log(replicate(-2, 6)) // []