//Recursive function that splits an array into right/left side until there's one element left
//Part of merge sort

function split(arr) {
    if (arr.length > 1) {
        
        let left = [];
        let right = [];

        if (arr.length % 2 == 0) { //Divisible by 2 i.e. even
            let halfway_point = arr.length / 2;
            for (let i = 0; i < halfway_point; i++) {
                left.push(arr[i]);
                if (left.length > 1) {
                    let further = split(left);
                    left = further;                    
                }
            }
            for (let j = halfway_point; j < arr.length; j++) {
                right.push(arr[j]);
                if (right.length > 1) {
                    let further = split(right);
                    right = further;
                }
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
    } 
    else {
        return "only one element";
    }
}

let test = split([1,2,3,4,]);

console.log(test);