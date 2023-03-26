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
{
name: "Ruth",
yearOfBirth: 1924,
yearOfDeath: 1957,
},
{
name: "James",
yearOfBirth: 1935,
yearOfDeath: 2005,
},
{
name: "Samuel",
yearOfBirth: 1953,
},
]

# Pseudocode

Return the person object for which the value of age is the greatest, wherein:
  IF yearOfDeath is present:
    age = yearOfDeath - yearOfBirth;
  ELSE if yearOfDeath is not present:
    age = currentYear - yearOfBirth;

To do this, we'll use the reduce() method on the array, with the accumulator being called oldest, and the current value being called currentPerson. For each currentPerson: 
  IF currentPerson's age is greater than oldest's age:
    set oldest = currentPerson;
  ELSE do nothing;

At the end, return oldest person object.

