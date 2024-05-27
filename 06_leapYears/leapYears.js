const leapYears = function(num) {

	if (num % 2 === 0) {
		return true;

	} if (num % 4 === 0) {
		return true;

	} else 
		return false;

};

leapYears(1999);

// Do not edit below this line
module.exports = leapYears;
