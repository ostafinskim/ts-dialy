import isMatch from "./fingerpring-test"


test(() => {
	expect(isMatch("helloworld", "helloworld")).toBe(true)
	expect(isMatch("helloworld", "helloworlds")).toBe(false)
	expect(isMatch("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthelazydog")).toBe(true)
	expect(isMatch("theslickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazydog")).toBe(true)
	expect(isMatch("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazycat")).toBe(false)
})