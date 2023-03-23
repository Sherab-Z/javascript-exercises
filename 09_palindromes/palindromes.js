// FUNC: Check whether the string passed in is a palindrome or not, based only on the letter characters (case insensitive), ignoring all other characters
const palindromes = function (str) {
  // 1. Change str into an array of its characters
  const origArr = str.split("");

  // 2. Normalize array and store as (normalizedArr)
  const normalizedArr = origArr
    .filter((char) => /^[a-zA-Z]+$/.test(char)) // Keep only letters
    .map((char) => char.toLowerCase()); // Convert letters to lower case
  // Convert back to string
  const normalizedStr = normalizedArr.join("");

  // 3. Reverse normalizedArr and convert that to a string
  const reversedStr = normalizedArr.reverse().join("");

  // 4. TEST: IF normalizedStr === reversedStr, return true; ELSE return false.
  return reversedStr === normalizedStr ? true : false;
};
// Do not edit below this line
module.exports = palindromes;
