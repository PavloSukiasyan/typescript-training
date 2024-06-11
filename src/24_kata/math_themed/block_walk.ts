/**
 * 
 * You live in the city of Cartesia where all roads are laid out in a perfect grid. 
 * You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk.
 *  The city provides its citizens with a Walk Generating App on their phones -- 
 * every time you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']).
 *  You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block,
 *  so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course,
 *  return you to your starting point. Return false otherwise.

    Note: you will always receive a valid array containing a random assortment of direction letters
    ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

--
  Walk Validator

should return false if walk is too short
should return false if walk is too long
should return false if walk does not bring you back to start
should return true for a valid walk
should work for random tests
--

 */

export function isValidWalk(walk: string[]) {
  if (walk.length != 10) {
    return false;
  }

  let nDirCount = 0;
  let sDirCount = 0;
  let wDirCount = 0;
  let eDirCount = 0;

  if (walk.includes('n')) {
    nDirCount = walk.filter(direction => direction == 'n').length;
  }
  if (walk.includes('s')) {
    sDirCount = walk.filter(direction => direction == 's').length;
  }
  if (walk.includes('w')) {
    wDirCount = walk.filter(direction => direction == 'w').length;
  }
  if (walk.includes('e')) {
    eDirCount = walk.filter(direction => direction == 'e').length;
  }

  let nsDirResult = false;
  if (nDirCount === sDirCount) {
    nsDirResult = true;
  }

  let weDirResult = false;
  if (wDirCount === eDirCount) {
    weDirResult = true;
  }

  return nsDirResult && weDirResult;
}

// Solution by codeium:
// export function isValidWalk(walk: string[]): boolean {
//   const directions: Record<string, number> = {
//     n: 0,
//     s: 0,
//     w: 0,
//     e: 0,
//   };

//   walk.forEach((direction) => {
//     directions[direction]++;
//   });

//   return (
//     directions.n === directions.s &&
//     directions.w === directions.e &&
//     walk.length === 10
//   );
// }

console.log(isValidWalk(['n', 'n', 's', 's']));
console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 'n']));
console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 'n', 'n', 'n']));
