const reverseString = function(string) { // Returns reversed string
  let stringArr = string.split(''); // Turn string into an array of its characters
  let reversedArr = stringArr.reverse(); // Reverse the array
  let reversedStr = reversedArr.join('') // Turn this reversed array back into a string
  return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
