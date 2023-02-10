/* Pseudocode:
Use for loops to iterate over the array and compare its els to arg array els. If there's a match with an array el, then remove that el from the array
*/

// Function accepts an array (required) and any number of additional args (optional), then removes all array els that exactly match any of the args
const removeFromArray = function (array) {
  const removalsArr = Array.from(arguments).slice(1); // Convert args obj to an array, excluding the initial array arg

  arrayLoop: for (let i = 0; i < array.length; i++) {
    // Iterate over all els in array
    for (let j = 0; j < removalsArr.length; j++) {
      // For the current el in array, iterate over removalsArr
      if (array[i] === removalsArr[j]) {
        // If the current el in array matches an arg in removalsArr, remove it from the array
        array.splice(i, 1);
        i--; // Because splice() removes an el, we need to decrement the index so i doesn't skip the next el
        continue arrayLoop; // Get next array el
      }
      continue; // If current array el doesn't match, do nothing and continue to next el in array
    }
  }
  return array; // Return potentially modified array
};

// Do not edit below this line
module.exports = removeFromArray;
