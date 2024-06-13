
const add = function(a, b) {
	return a + b;
	
};

const subtract = function(a, b) {
	return a - b;
	
};

const sum = function (empty) {
	let sum = 0;
	for (let num of empty) {
		sum += num;
	}
	return sum;
};

const multiply = function(num) {
	if (!num ||num.length === 0) {
		return 0;
	}
	return num.reduce((accum, curr) => accum * curr, 1);

};

const power = function() {

	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
