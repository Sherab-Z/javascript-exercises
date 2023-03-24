// FUNC: Returns a specific member of the Fibonacci sequence (1,1,2,3,5,8,13,21...)
const fibonacci = function (num) {
  const fibArr = [0, 1]; //  Start with an array (fibArr) containing the first two values in the sequence
  //  Loop up to n, creating a Fibonacci sequence of n elements:
  const n = parseInt(num);  // Ensure that n is an integer number type
  if (n < 1) {
    return "OOPS";  // Doesn't accept negative numbers
  } else if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 1;
  } else if (n > 2) {  // For n values greater than 2, generate the fibonacci sequence up to n and return the last element
    for (let i = 0; i <= n - 2; i++) {
      const lastTwoArr = fibArr.slice(-2); //  Create an empty arr (lastTwoArr) from a slice() of the last two values in fibArr
      fibArr.push(lastTwoArr.reduce((sum, current) => sum + current, 0)); // calc the sum of both values in lastTwoArr, then push that sum onto the end of fibArr
    }

    return fibArr.pop(); //  Return the last (nth) value of fibArr
  }
};

// Do not edit below this line
module.exports = fibonacci;
