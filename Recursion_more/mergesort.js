
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
}

let one_element = mergeSort([1]);
console.log(one_element);

let eight = mergeSort([1,2,3,4,5,6,7,8]);
console.log(eight);

let five = mergeSort([1,2,3,4,5]);
console.log(five);