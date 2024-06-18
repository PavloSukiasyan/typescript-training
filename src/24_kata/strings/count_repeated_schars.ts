/**
 * 6 kyu Counting Duplicates
 * 
 * Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
Example

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

 */

export function duplicateCount(text: string): number {
  return text
    .replace(' ', '')
    .toLocaleLowerCase()
    .split('')
    .sort()
    .filter((element, index, array) => array.indexOf(element) !== index)
    .filter((element, index, array) => array.indexOf(element) === index).length;
}

console.log(`"ABBA" -> 2 # 'A' and 'B' each occur twice:`, duplicateCount('AABB'));
console.log('"ABBACC" -> 3:', duplicateCount('AABBcc'));

// solution from other dev
export function duplicateCount2(text: string) {
  const letterCollection = text.toLowerCase().split('');
  const uniqueLetters = new Set();
  const duplicateLetters = new Set();

  letterCollection.forEach(letter =>
    uniqueLetters.has(letter) ? duplicateLetters.add(letter) : uniqueLetters.add(letter)
  );

  return duplicateLetters.size;
}
