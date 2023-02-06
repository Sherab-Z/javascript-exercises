const repeatString = function(string, num) { // This function has 2 args: string and num. Declare a variable repeatStr; A loop will repeat num times, each time concatenating the input string repeatStr. Return repeatStr.
  let repeatStr = ''; // Empty string to hold the output

  if (num >= 0) { // Check that num is not negative (it's impossible to concatenate a string negative times)
  for (let i = 0; i < num; i++) {
    repeatStr += string;
  }
  return repeatStr;
} else { 
  return `ERROR`;
};
}

// Do not edit below this line
module.exports = repeatString;
