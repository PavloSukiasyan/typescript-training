/**
 * 
 * Sum of odd numbers
 * 
 * 
 * Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...

Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
 */

function rowSumOddNumbers(n: number): number {
  let sum = 0;

  // Calculate the starting odd number for the nth row
  let startingOddNumber = n * (n - 1) + 1;

  // Sum the odd numbers in the nth row
  for (let i = 0; i < n; i++) {
    sum += startingOddNumber;
    startingOddNumber += 2;
  }

  return sum;
}

console.log(rowSumOddNumbers(1));
console.log(rowSumOddNumbers(2));
console.log(rowSumOddNumbers(3));
console.log(rowSumOddNumbers(4));
console.log(rowSumOddNumbers(5));
console.log(rowSumOddNumbers(20));

console.log('The same: ', Math.pow(5, 3));
