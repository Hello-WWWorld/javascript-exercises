const convertToCelsius = function(fahrenheit) {

	let fh =(fahrenheit - 32) * 5 / 9 

	return fh;
};

const convertToFahrenheit = function(celsius) {

	let c = celsius * 9 / 5 +  32

	return c;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
