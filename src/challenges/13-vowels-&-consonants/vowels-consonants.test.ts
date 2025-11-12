import count from "./vowels-consonants"
import { expect, test } from 'vitest'

test('vowels-consonans', () => {
	expect(count("Hello World")).toStrictEqual([3, 7])
	expect(count("JavaScript")).toStrictEqual([3, 7])
	expect(count("Python")).toStrictEqual([1, 5])
	expect(count("freeCodeCamp")).toStrictEqual([5, 7])
	expect(count("The quick brown fox jumps over the lazy dog.")).toStrictEqual([11, 24])
})
