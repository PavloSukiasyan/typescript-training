console.log('Your code goes here...');

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

function createPhoneNumber(numbers: number[]): string {

  const [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10] = numbers;
  
  const phoneNumber: string = "(" + n1 + n2 + n3 + ")" + " " + n4 + n5 + n6 + "-" + n7 + n8 + n9 + n10;
  return phoneNumber;
}

console.log("result number is " + createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

let str = 'some string!';

console.log("string manipulation test:");
console.log("result number is '" + str.slice(0,2) + "'" + "\n");

function reverseString(str: string): string {
  return str.split('').reverse().join('');
}

const originalString = "Hello, World!";
const reversedString = reverseString(originalString);
console.log(reversedString); // Outputs: "!dlroW ,olleH"

const reverseStringArrow = (str: string): string => str.split('').reverse().join('');
