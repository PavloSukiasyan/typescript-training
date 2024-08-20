/**
 * 6 kyu
Find the unique number
 * Description:

There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.
 */

export function findUniq(arr: number[]) {
  return arr.find(el => arr.indexOf(el) === arr.lastIndexOf(el));
}

console.log(findUniq([1, 1, 1, 2, 1, 1]), 2);
console.log(findUniq([0, 0, 0.55, 0, 0, 2, 2]), 0.55);
