/**
 * 8 kyu Reversed sequence 
 * 
 * Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]

 */

export const reverseSeq = (n: number): number[] => {
  let result = [];
  for (let index = n; index > 0; index--) {
    result.push(index);
  }
  return result;
};

console.log(reverseSeq(5));
console.log(reverseSeq(26));
