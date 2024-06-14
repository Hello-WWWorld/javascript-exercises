const fibonacci = function(n) {
	if (n <= 0) {
		return "Error";
	} else if (n === 1) {
		return 0;
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
