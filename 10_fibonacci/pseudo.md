# PSEUDOCODE
1. Start with an array (fibArr) containing the first two values in the sequence
2. Loop up to n, creating a Fibonacci sequence of n elements:
   1. Create an empty arr (lastTwoArr) from a slice() of the last two values in fibArr
   2. reduce() lastTwoArr to its sum, then push that value onto the end of fibArr
   3. Repeat n times
3. Return the last value of fibArr, by pop()ing it off the end