import changeCase from "./case";

test('case change', () => {
	expect(changeCase('hello_world')).toBe('HeLlO~wOrLd')
	expect(changeCase('this_is_a_long_string')).toBe('ThIs~Is~A~lOnG~sTrInG')
	expect(changeCase('javascript_is_fun')).toBe('JaVaScRiPt~Is~FuN')
	expect(changeCase('')).toBe('') 
	expect(changeCase('x')).toBe('X') 
	expect(changeCase('_')).toBe('~')
})