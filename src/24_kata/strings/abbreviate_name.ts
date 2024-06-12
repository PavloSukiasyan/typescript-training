/**
 * 8 kyu Abbreviate a Two Word Name
 * 
 * Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

 */

export function abbrevName(name: string): string {
  const result = name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase())
    .join('.');
  return result;
}

console.log(abbrevName('Dalinar Holin'));
console.log(abbrevName('dalln shallan'));
