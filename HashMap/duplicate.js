// Given a string, remove all duplicates words. For example, given the string
// "I am a self-taught programmer looking for a job as a programmer", 
//your function should return
// "I am a self-taught programmer looking for a job as a".

function duplicate(string) {
    let split = string.split(' ');

    let hash = {};

    let k = 0;

    for (let individual of split) {
        if (individual in hash) {
            
        }
        else {
            hash[individual] = k; 
            k += 1;
        }
    }

    let new_string = "";

    for (i in hash) {
        new_string += i + " ";
    }

    return new_string;
}

//Test
let result = duplicate("I am a self-taught programmer looking for a job as a programmer");
console.log(result);