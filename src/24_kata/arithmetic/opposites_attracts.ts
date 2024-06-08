/**
 *
 * 8 kyu Opposites Attract
 * Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
 * Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
 */

export function lovefunc(flower1: number, flower2: number): boolean {
  return (flower1 % 2 === 0) == (flower2 % 2 === 1) ? true : false;
  // from comments : 
  // return (flower1 + flower2) % 2 === 1;
}

console.log(lovefunc(3, 4));
console.log(lovefunc(4, 4));
