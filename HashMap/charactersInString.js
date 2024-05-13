//Return an object showing the characters in a string and the number of occurances of each character
//e.g. ("hello") should return {'h':1, 'e': 1, 'l':2, 'o':1}

function characters(string) {
    let obj = {};

    for (let i of string) {
        if (i in obj) {
            obj[i] += 1;
        }
        else {
            obj[i] = 1;
        }
    }
    
    return obj;
}

let test = characters("Missouri");
console.log(test);