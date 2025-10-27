export default function binary_search(haystack: number[], needle: number): boolean {

	let lo = 0;
	let hi = haystack.length;

	do {

		const m = Math.floor(lo + (hi - lo) / 2)
		const v = haystack[m]

		if (v === needle) {
			return true
		} else if (v > needle) {
			hi = m
		} else {
			lo = m + 1
		}


	} while (lo < hi)

	return false

}

const foo = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
console.log(binary_search(foo, 69))