/**
 * 8 kyu
  Simple multiplication
 * This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
 */

export function simpleMultiplication(num: number): number {
  return num % 2 === 0 ? num * 8 : num * 9;
}

console.log(simpleMultiplication(2));
console.log(simpleMultiplication(3));
