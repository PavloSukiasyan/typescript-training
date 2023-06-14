
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Examples:

// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

export function descendingOrder(n: number): number {
  const digits = n.toString().split(''); // Convert number to string and split into individual digits
  const sortedDigits = digits.sort((a, b) => Number(b) - Number(a)); // Sort the digits in descending order
  const result = Number(sortedDigits.join('')); // Join the sorted digits and convert back to number
  return result;
}
const option = 1245674;
console.log('Here goes the original: ' + option);
console.log('Here goes the answer  : ' + descendingOrder(option));