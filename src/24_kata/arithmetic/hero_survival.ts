/**
 * A hero is on his way to the castle to complete his mission. 
 * However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated,
 * our hero has no idea how many bullets he would take, and our hero has no idea how many bullets he should carry.. 
 * Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons,
 *  will he survive?

Return true if yes, false otherwise :)

 */

export function hero(bullets: number, dragons: number): boolean {
  if (bullets < dragons * 2) {
    return false;
  }
  return true;
}

/**
 * Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
 */

export const boolToWord = (bool: boolean): string => {
  return bool ? 'Yes' : 'No';
};
