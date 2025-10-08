import getCount from "./vovel-count";

test('getCount', () => {
	expect(getCount('hello')).toEqual(2)
	expect(getCount("abracadabra")).toEqual(5)
})