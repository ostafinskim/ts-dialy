import isBalanced from "./vowel-balance";
import { expect, test } from 'vitest'

test('isBalanced', () => {
	expect(isBalanced("racecar")).toBe(true);
	expect(isBalanced("Lorem Ipsum")).toBe(true);
	expect(isBalanced("Kitty Ipsum")).toBe(false);
	expect(isBalanced("string")).toBe(false);
	expect(isBalanced(" ")).toBe(true);
	expect(isBalanced("abcdefghijklmnopqrstuvwxyz")).toBe(false);
	expect(isBalanced("123A#b!E&*456-o.U")).toBe(true);
})