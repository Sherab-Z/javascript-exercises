const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((total, current) => total + current, 0);
};

const multiply = function (arr) {
  return arr.reduce((total, current) => total * current, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  let result = 1;
  
  if (num < 0) {
    return -1; // Error: factorial of a negative number does not exist
  } else if (num === 0 || num === 1) {
    return 1;
  } else {
    for (let i = 2; i <= num; i++) {
      // E.g. num = 5, then numArr = [1,2,3,4,5]
      result *= i;
    }
  }
  return result;
};
// let result = 0;
//     for (let i = num; i > 1; i--) {
//       result += i * (i - 1);
//     }
//     return result;

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
