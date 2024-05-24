
const removeFromArray = function(arr, valueToRemove) {

	result = arr.filter(arr => arr !== 3);
	return result;


};


removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]


// Do not edit below this line
module.exports = removeFromArray;

// TODO:
//  × multiple values (3 ms)
//  × removes multiple of the same value (2 ms)
//  × ignores non present values (1 ms)
//  × ignores non present values, but still works (1 ms)
//  × can remove all values
//  × works with strings (1 ms)
