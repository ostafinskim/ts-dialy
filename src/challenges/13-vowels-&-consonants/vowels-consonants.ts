/*
Given a string, return an array with the number of vowels and number of consonants in the string.

Vowels consist of a, e, i, o, u in any case.
Consonants consist of all other letters in any case.
Ignore any non-letter characters.
For example, given "Hello World", return [3, 7].
*/

export default function count(str: string): [number, number] {
	const vowels = "aeiouAEIOU";
	const counts = { vowels: 0, others: 0 };

	for (const char of str.replace(/\W/g, '')) {
		if (vowels.includes(char)) counts.vowels++;
		else counts.others++;
	}

	return [counts.vowels, counts.others];
}