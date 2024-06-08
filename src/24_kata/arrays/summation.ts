/**

Summation

Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)


 */

export const summation = (num: number) => {
  let numbers: number[] = [];
  for (let index = 1; index <= num; index++) {
    numbers.push(index);
  }

  return numbers.reduce((currentVal, val) => {
    return currentVal + val;
  }, 0);
};

console.log(summation(10));

/**

// From comments 
export const summation = (num: number): number => {
  return (num * (num + 1)) / 2;
}

console.log(summation(10)); // Output: 55

 */
