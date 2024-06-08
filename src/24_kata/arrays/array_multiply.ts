/*

Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


*/

export function grow(arr: number[]): number {
  return arr.reduce((currentVal, nextVal) => {
    return currentVal * nextVal;
  });
}

console.log(grow([1, 2, 3]));
console.log(grow([5, 10, 2]));
