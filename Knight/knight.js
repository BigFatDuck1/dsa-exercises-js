// //Knight travails
// Your task is to build a function knightMoves that shows the shortest possible way to get 
//from one square to another by outputting all squares the knight will stop on along the way.
// You can think of the board as having 2-dimensional coordinates. Your function would therefore look like:

// Sample input/output:
// knightMoves([3,3],[4,3])
//   => You made it in 3 moves!  Here's your path:
//     [3,3]
//     [4,5]
//     [2,4]
//     [4,3]


function knightMoves(start_array, end_array=[0,0]) {

    let [start_x, start_y] = [...start_array]; //Object destructuring
    let [end_x, end_y] = [...end_array];
    console.log(start_array);
    console.log(start_x, start_y);

    function legalMove(x, y) {
        let left_lower_corner = [0,0];
        let right_lower_corner = [8,0];
        let left_upper_corner = [0,8];
        let right_upper_corner = [8,8];
        
        if (x < left_lower_corner[0] || x > left_upper_corner) {
            return false;
        }
        if (y < right_lower_corner[1] || y > left_upper_corner[1]) {
            return false;
        }
        else {
            return true;
        }
    }

    return legalMove(start_x, start_y);
}

let test_true = knightMoves([1,1]);
let test_false = knightMoves([9,9]);

console.log(test_true);
console.log(test_false);