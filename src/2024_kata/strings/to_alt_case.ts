export function toAlternatingCase(s: string): string {
  let result: string[] = [];
  let convertedLetter: string;

  for (const letter of s) {
    if (/^[A-Z]*$/.test(letter)) {
      convertedLetter = letter.toLocaleLowerCase();
    } else {
      convertedLetter = letter.toUpperCase();
    }
    result.push(convertedLetter);
  }

  return result.join('');
}

console.log(toAlternatingCase('HeLLo WoRLD"!'));

// chat GPT version
export function toAlternatingCaseGPT(s: string): string {
  let result: string[] = [];

  for (const letter of s) {
    if (letter === letter.toUpperCase()) {
      result.push(letter.toLowerCase());
    } else {
      result.push(letter.toUpperCase());
    }
  }

  return result.join('');
}

console.log(toAlternatingCaseGPT('pavlo!'));
