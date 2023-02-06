const reverseString = function(string) {
  let stringArr = string.split(''); // Turn string into an array of its characters
  let reverseArr = stringArr.reverse(); // Reverse the array
  let reverseString = reverseArr.join('') // Turn this reversed array back into a string
  return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
