const repeatString = function(string, num) { // Takes 2 arguments: a string and a number (num), and returns the string repeated num times
  let repeatStr = ''; // Empty string to hold the output

  if (num >= 0) { // Check that num is not negative (it's impossible to concatenate a string negative times)
  for (let i = 0; i < num; i++) { // Loop concatenates the string onto repeatStr num times
    repeatStr += string;
  }
  return repeatStr;
} else { 
  return `ERROR`;
};
}

// Do not edit below this line
module.exports = repeatString;
