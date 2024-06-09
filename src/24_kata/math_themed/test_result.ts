/**

There was a test in your class and you passed it. Congratulations!

But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return true if you're better, else false!
Note:

Your points are not included in the array of your class's points. Do not forget them when calculating the average score!

 */

export function betterThanAverage(classPoints: number[], yourPoints: number): boolean {
  const classPointsAverage = classPoints.reduce((currentVal, val) => currentVal + val, 0) + yourPoints;

  return classPointsAverage / classPoints.length <= yourPoints ? true : false;
}
console.log(betterThanAverage([2, 3], 5));
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69));
console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50));
console.log(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21));

// generate the same function but in other way

// Codeium generated code
export function betterThanAverage2(classPoints: number[], yourPoints: number): boolean {
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
}
