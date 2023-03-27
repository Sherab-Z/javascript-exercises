const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

//  FUNC: Takes an array of people objects and returns the oldest person object, including those who are still alive
const findTheOldest = function (peopleArr) {
  return peopleArr.reduce((oldestPerson, currentPerson) => {
    function getAge(personObj) {
      if (personObj && ('yearOfBirth' in personObj)) {
        // First check that the person obj has a yearOfBirth, which is needed for calculating their age
        if (personObj.yearOfDeath) {
          // If they already died, then calculate age based on that year
          return personObj.yearOfDeath - personObj.yearOfBirth;
        } else {
          // Else if they're still alive, then calculate age based on the current year
          const thisYear = new Date().getFullYear(); // Get the current year
          return thisYear - personObj.yearOfBirth;
        }
      } else {
        // If the person obj has no birth or death year, return 0 
        return 0;
      }
    }
    // Get the ages of the current and oldest people
    const currentPersonAge = getAge(currentPerson);
    const oldestPersonAge = getAge(oldestPerson);
    // Compare ages and return the oldest person object
    return currentPersonAge > oldestPersonAge ? currentPerson : oldestPerson;
  });
}

// -------------

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
