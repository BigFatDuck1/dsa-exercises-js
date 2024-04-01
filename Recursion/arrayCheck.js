// Write a function called arrayCheck which accepts an array and a callback and 
//returns true if every value in the array returns true when passed as parameter to the callback function

//Basically, arrayCheck accepts two arguments: an array, and a function
//If all the values in the array "fit the criteria" of the function, arrayCheck() returns true, 
//otherwise, false
function arrayCheck(array, func) {
	//Base
	if (array.length == 0) {
		return true;
	}

	//Recursive
	if (func(array[0]) == true) {
		array.shift();
		console.log(array);
		return arrayCheck(array, func);
	}
	else {
		return false;
	}

}

//Test
let allAreLessThanSeven = arrayCheck([1,2,6,10], function(num){
	return num < 7;
});

console.log(allAreLessThanSeven); // false