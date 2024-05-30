/**

Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

 */

export class Kata {
  static disemvowel(str: string): string {
    return str
      .split('')
      .filter(letter => {
        return !/^[aeiou]$/i.test(letter);
      })
      .join('');
  }
}

// from comments
/**
  static disemvowel(str: string) {
    return str.replace(/[aeiou]/gi, "");
  }
 */

console.log(Kata.disemvowel('Check this out! its cool'));
console.log(Kata.disemvowel('Ax Check this out! its cool'));
