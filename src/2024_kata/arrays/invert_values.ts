/**
 * 8 kyu Invert values
 * Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

[1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
[1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
[] --> []

 */

export function invert(array: number[]): number[] {
  return array.map(el => (el = el * -1));
}

console.log(invert([1, -2, 3, -4, 5]));
