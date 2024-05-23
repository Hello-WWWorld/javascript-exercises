const repeatString = function(word, times) {
	if (typeof times !== 'number' || times < 0) {
			return "ERROR";
		}
		
	let result = '';
	for (let i = 0; i < times; i++) {
		result = result + word;
	


	}
	return result;


}

repeatString('', 3);
// Do not edit below this line
module.exports = repeatString;
