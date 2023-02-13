// Formula to convert: f farenheit == ((f - 32) * (5/9)) celsius
/* Pseudocode:
1. Declare variable result;
2. Apply formula to get conversion result;
3. Declare variable roundedResult;
4. Round result value to 1 decimal place and assign to roundedResult;
  a. Use separate function roundNumToOneDecimalPlace() to round result value:
      - Return rounded result value;
4. Return roundedResult;
*/
function roundNumToOneDecimalPlace(result) { // Accepts number argument; Returns argument rounded to 1 decimal place
  return roundedResult = Number(result.toFixed(1)); // toFixed rounds result to 1 decimal place, then Number() converts returned string back into a number
}

const convertToCelsius = function (f) { // Accepts number argument; Returns number rounded to 1 decimal place
  let result = 0;
  result = ((f - 32) * (5 / 9)); // Conversion formula
  let roundedResult = roundNumToOneDecimalPlace(result);
  return roundedResult;
};

// Formula to convert: c celsius == (c * (9/5)+32) farenheit
/* Pseudocode:

*/
const convertToFahrenheit = function (c) { // Accepts number argument; Returns number rounded to 1 decimal place
  let result = 0;
  result = ((c * (9/5)) + 32); // Conversion formula
  let roundedResult = roundNumToOneDecimalPlace(result); 
  return roundedResult;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
