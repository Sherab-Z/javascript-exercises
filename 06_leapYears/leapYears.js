/* Pseudocode:
App determines whether the year (positive integer) passed in is a leap year.
Definition of a leap year:

If (year % 400 === 0) then return true 
If (year % 4 === 0 && ! (year % 100 === 0) then return true
Else return false

Returns boolean:
  - true if year is a leap year
  - false if year is not a leap year
*/

const leapYears = function(year) { // Return true if year is a leap year, false otherwise
  if (year % 400 === 0) { // First take care of fringe case for returning true
    return true;
  } else if (year % 4 === 0 && !(year % 100 === 0)) { // Then cover common case for returning true
    return true;
  } else { // If none of these cases match, then year is not a leap year
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
