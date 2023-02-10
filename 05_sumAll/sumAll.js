/* Pseudocode:
This function takes 2 positive integer arguments (numA and numB) and returns the sum of every number between(and including) them

-- Check that both are of the number type;
-- Check that numA and numB are positive;
-- Declare variable sum = 0;
- Determine lowest & highest of numA and numB, and assign to lowNum and highNum respectively;
- Loop from lowNum to highNum;
- Add i to sum;
- Return sum;
*/

const sumAll = function(numA, numB) {
  let sum = 0;

  if (typeof numA !== "number" || typeof numB !== "number") {
    return "ERROR";
  } else if (numA < 0 || numB < 0) {
    return "ERROR";
  } else {
    const lowNum = Math.min(numA, numB); // Get lowest of numA and numB
    const highNum = Math.max(numA, numB); // Get highest of numA and numB

    for (let i = lowNum; i <= highNum; i++) { //Loop from lowNum to highNum
      sum += i; // Add i to sum
  }
  return sum; // Return the sum
  }
};

// Do not edit below this line
module.exports = sumAll;
