/**
 * 7 kyu   Two to One
 * 
 * Take 2 strings s1 and s2 including only letters from a to z.
 * Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
Examples:

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


 */

export const longest = (s1: string, s2: string): string => {
  let combined = s1 + s2;
  return [...combined]
    .filter((value, index, array) => array.indexOf(value) === index)
    .sort()
    .join('');
};

// from solutions:
// [...new Set([...s1, ...s2])].sort().join("");

console.log(longest('xyaabbbccccdefww', 'xxxxyyyyabklmopq'), '\nabcdefghijklmnopqrstuvwxyz');
