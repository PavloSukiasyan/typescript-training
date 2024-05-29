/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

*/

export function findAverage(array: number[]): number {
  if (array.length === 0) {
    return 0;
  }

  const sum = array.reduce((currentVal, val) => currentVal + val, 0);

  return sum / array.length;
}

console.log(findAverage([1, 1, 1]));
console.log(findAverage([]));
