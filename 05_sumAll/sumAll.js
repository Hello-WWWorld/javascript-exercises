const sumAll = function(start, end) {
	finalSum = 0;
	i = start;

	while(i <= end) {
		finalSum += i;
		i++;

	} return finalSum;

}; 
	

sumAll(1, 4); // returns the sum of 1 + 2 + 3 + 4 which is 10)


// Do not edit below this line
module.exports = sumAll;
