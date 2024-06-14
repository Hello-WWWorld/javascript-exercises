const fibonacci = function(input) {
	const n = parseInt(input);

	if (isNaN(n) || n < 0) {
		return "OOPS"; 
	} else if (n === 0) {
		return 0;
	} else if (n === 1) {
		return 1;
	} else if (n === 2) {
		return 1;
	}

	let a = 1, b = 2, nextNum; 
	for (let i = 4; i <= n; i++) {
		nextNum = a + b;
		a = b;
		b = nextNum;


	}
	return nextNum;


};

// Do not edit below this line
module.exports = fibonacci;
