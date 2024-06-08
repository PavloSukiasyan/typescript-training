function findRepeatedWords(input: string): Map<string, number> {
  // Split the input string into words using whitespace as the delimiter
  const words = input.split(/\s+/);

  // Create a Map to store the word frequencies
  const wordFrequencies = new Map<string, number>();

  // Iterate over the words and count their frequencies
  for (const word of words) {
    // Ignore empty words
    if (word.trim().length === 0) {
      continue;
    }

    // Convert the word to lowercase to handle case-insensitive comparisons
    const lowercaseWord = word.toLowerCase();

    // Get the current frequency of the word from the Map
    const frequency = wordFrequencies.get(lowercaseWord) || 0;

    // Increment the frequency by 1
    wordFrequencies.set(lowercaseWord, frequency + 1);
  }

  // Create a new Map to store the repeated words
  const repeatedWords = new Map<string, number>();

  // Iterate over the word frequencies and add the repeated words to the new Map
  for (const [word, frequency] of wordFrequencies.entries()) {
    if (frequency > 1) {
      repeatedWords.set(word, frequency);
    }
  }

  return repeatedWords;
}

const input = 'apple banana apple orange apple banana';
const repeatedWords = findRepeatedWords(input);
console.log(repeatedWords);
