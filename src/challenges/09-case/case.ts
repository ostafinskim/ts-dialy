/**
 * Given a string representing a variable name, convert it to "alternating case" using the following constraints:

Replace all underscores (_), and hyphens (-) with a tilde (~).
Capitalize the first letter of the string, and every other letter after that, ignore the tilde character when counting.
For example, given hello_world, return HeLlO~wOrLd.
 */

export default function changeCase(str: string): string {
	const replaced = str.replaceAll(/[-_]/g, '~');

	let letterCount = 0;

	return [...replaced].map(char => {
		if (char === '~') return '~';

		const result = letterCount % 2 === 0
			? char.toUpperCase()
			: char.toLowerCase();

		letterCount++;
		return result;
	}).join('');
}