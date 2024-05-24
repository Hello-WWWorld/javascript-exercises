
const removeFromArray = function(arr, ...valueToRemove) {

	result = arr.filter(item => !valueToRemove.includes(item));
	return result;


};


removeFromArray([1, 2, 3, 4], 3, 1); // should remove 3 and return [1,2,4]


// Do not edit below this line
module.exports = removeFromArray;


