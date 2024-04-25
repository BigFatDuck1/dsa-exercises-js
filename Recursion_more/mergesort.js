
function mergeSort(array) {

    //If array only has one element, it is already sorted
    if (array.length == 1) {
        return array;
    }
    else {
        let result = split(array);
        return result;
    }

    function split(arr) {
        if (arr.length > 1) {
            
            let left = [];
            let right = [];

            if (arr.length % 2 == 0) { //Divisible by 2 i.e. even
                let halfway_point = arr.length / 2;
                for (let i = 0; i < halfway_point; i++) {
                    left.push(arr[i]);
                }
                for (let j = halfway_point; j < arr.length; j++) {
                    right.push(arr[j]);
                }

                return [left, right];
            } 
            else if (arr.length % 2 == 1) { //Odd
                let halfway_point = (arr.length + 1) / 2;
                for (let i = 0; i < halfway_point; i++) {
                    left.push(arr[i]);
                }
                for (let j = halfway_point; j < arr.length; j++) {
                    right.push(arr[j]);
                }

                return [left, right];
            } 
            else if(arr.length == 1) { //Only one element left
                return "Split";
            }
        } 
    }

    function merge(array1, array2, merged_array) {
        
        //1. If either array is empty, push all the values into merged_array
        //also this is base case
        if (array1.length == 0 || array2.length == 0) {
            for (let i of array1) {
                merged_array.push(i);
            }
            for (let j of array2) {
                merged_array.push(j);
            }
        }
        //2. If non-empty array, take smallest value
        else {
            //If left hand side smaller...
            if (array1[0] < array2[0]) {
                merged_array.push(array1.shift());
            }
            //If right hand side smaller
            else if (array2[0] < array1[0]) {
                merged_array.push(array2.shift());
            }
            //Recursive call
            merge(array1, array2, merged_array);
        }

        return merged_array;
    }

}

let one_element = mergeSort([1]);
console.log(one_element);

let eight = mergeSort([1,2,3,4,5,6,7,8]);
console.log(eight);

let five = mergeSort([1,2,3,4,5]);
console.log(five);