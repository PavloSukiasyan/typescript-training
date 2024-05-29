/**
 * 
 * 
 * 

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
Fundamentals

 */

export function findShort(s: string): number {
  const result = s.split(' ').sort((a, b) => {
    return a.length - b.length;
  });
  return result[0].length;
}

console.log(findShort('String will never be empty and'));
