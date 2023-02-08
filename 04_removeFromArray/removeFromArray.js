const removeFromArray = function(array) {
  for (let el of array) {
    for (let i = 0; i < arguments.length; i++) {
      if (arguments[i] === el) {
        array.splice(array.indexOf(el), 1);
      }
  }
}
return array;
};

/* Pseudocode:
Use for...of to iterate over the array

*/
// Do not edit below this line
module.exports = removeFromArray;
