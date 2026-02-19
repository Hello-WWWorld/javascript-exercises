const convertToCelsius = function(toCelsius) {
  return Math.round(((toCelsius - 32) / 1.8) * 10) / 10;


};

const convertToFahrenheit = function(toFahrenheit) {
  return Math.round(((1.8 * toFahrenheit) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
