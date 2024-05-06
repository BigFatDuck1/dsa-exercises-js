//Helpful merge sort visualizer
//https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/

function mergeSort(array) {

    //Base case
    //If array only has one element, it is already sorted
    if (array.length == 1 || array.length == 0) {
        return array;
    }
    
    //Recursive case
    //Split first
    let middle_point;

    if (array.length % 2 == 0 ) { //even
        middle_point = array.length / 2;
    }
    else if (array.length % 2 == 1) { //odd
        middle_point = (array.length + 1) / 2;
    }

    let l = array.slice(0, middle_point);
    let r = array.slice(middle_point);

    let left = mergeSort(l); //if l is just one element, then it will return that element because it is already maximally split
    let right = mergeSort(r);

    return [...left, right];

}

// let one_element = mergeSort([1]);
// console.log(one_element);

// let eight = mergeSort([1,2,3,4,5,6,7,8]);
// console.log(eight);

let five = mergeSort([1,2,3,4,5]);
console.log(five);