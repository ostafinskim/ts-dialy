/*
Given a string representing a DNA sequence, return its complementary strand using the following rules:

DNA consists of the letters "A", "C", "G", and "T".
The letters "A" and "T" complement each other.
The letters "C" and "G" complement each other.
For example, given "ACGT", return "TGCA".
*/
export default function complementaryDNA(strand: string) {
	const pairs = {
		A: 'T',
		T: 'A',
		C: 'G',
		G: 'C'
	}

	return [...strand].map(letter => pairs[letter as 'A' | 'T' | 'C' | 'G']).join('');

}