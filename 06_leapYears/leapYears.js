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
  return (year % 400 === 0)  // First cover fringe case
  || (year % 4 === 0 && !(year % 100 === 0));  // Then cover all other viable cases
};

// Do not edit below this line
module.exports = leapYears;
