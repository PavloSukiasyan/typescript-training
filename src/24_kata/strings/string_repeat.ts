/**
 * 8 kyu String repeat
 * 
 * Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
Examples (input -> output)

6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"


 */

export function repeatStr(n: number, s: string): string {
  let result = '';
  for (let index = 0; index < n; index++) {
    result = result + s;
  }
  return result;
  // return s.repeat(n);  //!way better!!
}

console.log('5, "Hello" -> "HelloHelloHelloHelloHello"', repeatStr(5, 'Hello'));
