/* Pseudocode:
1. Convert value to target unit;
2. Round result value to 1 decimal place and assign to roundedResult;
  a. Use separately declared function round() to round result value:
3. Return roundedResult;
*/

// Formula to convert temperature in Farenheit to Celsius
function round(value, precision) { // Returns a number value rounded to any number of decimal places, specified by the precision argument
  let multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

const convertToCelsius = function (f) { // Accepts a number argument; Returns the number rounded to 1 decimal place
  return round(((f - 32) * (5/9)), 1);
};

// Formula to convert temperature in Celsius to Farenheit
const convertToFahrenheit = function (c) { // Accepts a number argument; Returns the number rounded to 1 decimal place
  return round(((c * (9/5)) + 32), 1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
