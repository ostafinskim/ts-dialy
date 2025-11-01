import toDecimal from "./binary-to-decimal";

test('toDecimal', () => {
	expect(toDecimal("101")).toBe(5)
	expect(toDecimal("1010")).toBe(10)
	expect(toDecimal("10010")).toBe(18)
	expect(toDecimal("1010101")).toBe(85)
})