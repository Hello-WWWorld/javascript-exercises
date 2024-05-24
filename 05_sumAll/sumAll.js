const sumAll = function(start, end) {

	if (typeof start !== "number" || typeof end !== "number" || start < 0  || end < 0) {
		return "ERROR";
	}


	let	finalSum = 0;

	let lower = Math.min (start, end);
	let higher = Math.max (start, end);

	let i = lower;

	while(i <= higher) {
		finalSum += i;
		i++;

	} return finalSum;

}; 
	

sumAll(1, 4); // returns the sum of 1 + 2 + 3 + 4 which is 10)


// Do not edit below this line
module.exports = sumAll;
