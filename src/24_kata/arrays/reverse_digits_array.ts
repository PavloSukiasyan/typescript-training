/*
Convert number to reversed array of digits

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
Example(Input => Output):

35231 => [1,3,2,5,3]
0 => [0]

*/

export const digitize = (n: number): number[] => {
  const reversed = n.toString().split('').reverse();
  const result = reversed.map(element => +element);
  return result;
};

console.log(digitize(853));
console.log(digitize(12345));
console.log(digitize(990023));
