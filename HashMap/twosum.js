//Return the indices of the two numbers in an unsorted list that adds up to a target value 
//You can assume that only one pair adds up to the target number, and you may not use the same number in the list twice

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

//Faster solution: O(n) time

function twoSum(target, array) {
    
}

//Test
let slower = slowerTwoSum(5, [-1, 2, 3, 4, 7]);
console.log(slower);