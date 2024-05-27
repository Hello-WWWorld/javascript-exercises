const convertToCelsius = function(fahrenheit) {

	let fh = (fahrenheit - 32) * 5 / 9 

	return Math.round(fh * 10) / 10;
};

const convertToFahrenheit = function(celsius) {

	let c = celsius * 9 / 5 +  32

	return Math.round(c * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
