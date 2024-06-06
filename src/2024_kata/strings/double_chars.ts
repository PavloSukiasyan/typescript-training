/**
 * Double Chars
 * Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
Examples (Input -> Output):

* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "

Good Luck!

 */

export function doubleChar(str: string): string {
  return str
    .split('')
    .map(char => (char = char + char))
    .join('');
}

console.log(doubleChar('test'));
console.log(doubleChar('Hello World'));
console.log(doubleChar('1234!_ '));
