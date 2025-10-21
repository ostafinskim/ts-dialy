/*
Given a string, determine whether the number of vowels in the first half of the string is equal to the number of vowels in the second half. The string can contain any characters.

The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.

If there's an odd number of characters in the string, ignore the center character.
 */

const countVowel = (s: string): number => {
	const matches = s.match(/[aeiou]/gi);
	return matches ? matches.length : 0;
};

export default function isBalanced(s: string): boolean {
	if (s.length % 2 === 1) {
		const mid = Math.floor(s.length / 2);
		s = s.slice(0, mid) + s.slice(mid + 1);
	}

	const half = s.length / 2;
	const firstHalf = s.slice(0, half);
	const secondHalf = s.slice(half);

	return countVowel(firstHalf) === countVowel(secondHalf);
}
/*
isBalanced("racecar") => true.
isBalanced("Lorem Ipsum") => true.
isBalanced("Kitty Ipsum") => false.
isBalanced("string") => false.
isBalanced(" ") => true.
isBalanced("abcdefghijklmnopqrstuvwxyz") => false.
isBalanced("123A#b!E&*456-o.U") => true.
*/