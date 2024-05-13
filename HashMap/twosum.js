//Return the indices of the two numbers in an unsorted list that adds up to a target value 
//You can assume that only one pair adds up to the target number, and you may not use the same number in the list twice

//twoSum(5, [-1, 2, 3, 4, 7]) shoudl return [2,3]

//Slower solution: O(n^2) time.

function slowerTwoSum(target, array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (j == i) { //same element
                continue;
            }
            else {
                if (array[i] + array[j] == target) {
                    return [array[i], array[j]];
                }
            }
        }
    }
}


function arrayTwoSum(target, array) {
    for (let i = 0; i < array.length; i++) {
        let leftover = target - array[i];
        
        if (leftover in array && leftover != array[i]) { //leftover in array still takes O(n)
            return [array[i], leftover];
        }
    }
}

//Faster solution: O(n) time

function twoSum(target, array) {
    let array_obj = {};

    for (let i = 0; i < array.length; i++) {
        leftover = target - array[i];
        if (leftover in array_obj) { //Because objects {} is a hash table, the "in" operation only takes O(1) time
            return [array[i], leftover];
        }
        else {
            array_obj[array[i]] = i;
        }
    }
}

//Test
let slower = slowerTwoSum(5, [-1, 2, 3, 4, 7]);
console.log(slower);

let faster = twoSum(5, [-1, 2, 3, 4, 7]);
console.log(faster);