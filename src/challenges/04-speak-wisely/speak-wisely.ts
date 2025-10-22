/*
Given a sentence, return a version of it that sounds like advice from a wise teacher using the following rules:

- Words are separated by a single space.
- Find the first occurrence of one of the following words in the sentence: "have", "must", "are", "will", "can".
 
- Move all words before and including that word to the end of the sentence and:
	- Preserve the order of the words when you move them.
	- Make them all lowercase.
	- And add a comma and space before them.

- Capitalize the first letter of the new first word of the sentence.

- All given sentences will end with a single punctuation mark. 

- Keep the original punctuation of the sentence and move it to the end of the new sentence.

- Return the new sentence, make sure there's a single space between each word and no spaces at the beginning or end of the sentence.

For example, given "You must speak wisely." return "Speak wisely, you must."

*/
export default function wiseSpeak(sentence: string): string {
	// words to look for
	const keywords = ['have', 'must', 'are', 'will']

	// assume one punctuation mark at the end
	const punctuation = sentence.slice(-1)
	const words = sentence.slice(0, -1).split(" ")

	// find first keyword index
	const index = words.findIndex(word => keywords.includes(word.toLowerCase()))

	// If there are no keywords, return original
	if (index === -1) return sentence;

	// Split sentence into two parts
	const part1 = words.slice(0, index + 1)
	const part2 = words.slice(index + 1)

	// Create new sentence
	const newSentence = capitalize(part2.join(" ")) + ", " + part1.join(" ").toLowerCase() + punctuation

	return newSentence;
}

function capitalize(text: string): string {
	return text.charAt(0).toUpperCase + text.slice()
}