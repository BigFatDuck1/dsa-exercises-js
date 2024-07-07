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

    //Breadth-first search
    //Initialize queue
    let queue = allMoves([start_x, start_y]);

    while (queue.length > 0) {
        let first = queue.shift();
        if (arrayCompare(first, end_array) == true) {
            return "Destination reached";
        }
    }

    return "Destination unreachable";

    function arrayCompare(array1, array2) {
        for (let i = 0; i < array1.length; i++) {
            if (array1[i] != array2[i]) {
                return false;
            }
        }

        return true;
    }
    
    function allMoves(coordinates_array) {
        
        let generateMove = (x,y) => {
            let all_legal_moves = [];
            //1
            let x1 = x + 1;
            let y1 = y + 2;
            if (legalMove(x1, y1) == true) {
                all_legal_moves.push([x1,y1]);
            }
            //2
            let x2 = x + 1;
            let y2 = y - 2;
            if (legalMove(x2, y2) == true) {
                all_legal_moves.push([x2,y2]);
            }
            //3
            let x3 = x - 1;
            let y3 = y - 2;
            if (legalMove(x3, y3) == true) {
                all_legal_moves.push([x3,y3]);
            }
            //4
            let x4 = x - 1;
            let y4 = y + 2;
            if (legalMove(x4, y4) == true) {
                all_legal_moves.push([x4,y4]);
            }
            //5
            let x5 = x + 2;
            let y5 = y + 1;
            if (legalMove(x5, y5) == true) {
                all_legal_moves.push([x5,y5]);
            }
            //6
            let x6 = x + 2;
            let y6 = y - 1;
            if (legalMove(x6, y6) == true) {
                all_legal_moves.push([x6,y6]);
            }
            //7
            let x7 = x - 2;
            let y7 = y - 1;
            if (legalMove(x7, y7) == true) {
                all_legal_moves.push([x7,y7]);
            }
            //8
            let x8 = x - 2;
            let y8 = y + 1;
            if (legalMove(x8, y8) == true) {
                all_legal_moves.push([x8,y8]);
            }
            return all_legal_moves;
        }

        return generateMove(coordinates_array[0], coordinates_array[1]);

    }

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
    
}

// let test_true = knightMoves([1,1]);
// let test_false = knightMoves([9,9]);
// let test_false2 = knightMoves([-2, 3]);

// console.log(test_true);
// console.log(test_false);
// console.log(test_false2);

let test = knightMoves([0,0], [1,2]);
console.log(test);