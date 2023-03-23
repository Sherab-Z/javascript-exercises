# PSEUDOCODE for Exercise 09 - Palindromes 

Write a function that determines whether or not a given string is a palindrome.

A palindrome is a string that is spelled the same both forwards and backwards, usually without considering punctuation or word breaks:

### some palindromes:
  - A car, a man, a maraca.
  - Rats live on no evil star.
  - Lid off a daffodil.
  - Animal loots foliated detail of stool lamina.
  - A nut for a jar of tuna.

```javascript
palindromes('racecar') // true
palindromes('tacos') // false
```

# Psuedocode:
1. Normalize string
   1. Remove any spaces and punctuation, leaving only letters
   2. Change all letters to lowercase
2. Change into an array of letters (forwardArr)
3. Reverse the array (reversedArr)
4. IF forwardArr === reversedArr, return true; ELSE return false