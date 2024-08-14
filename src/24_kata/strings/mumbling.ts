/**
 * 7 kyu  - Mumbling
 * 
 * This time no story, no theory. The examples below show you how to write function accum:
Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.


 */

export function accum(s: string): string {
  return s.split('').map((letter, index)=>{
    return letter.toUpperCase()+letter.toLowerCase().repeat(index)
  }).join('-');
};

console.log(accum("RqaEzty"), "\nR-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy");