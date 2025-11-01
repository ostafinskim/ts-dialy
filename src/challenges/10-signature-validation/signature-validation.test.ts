import signatureValidation from "./signature-validation";

test('signatureValidation', () => {
	expect(signatureValidation("foo", "bar", 57)).toBe(true)
	expect(signatureValidation("foo", "bar", 54)).toBe(false)
	expect(signatureValidation("freeCodeCamp", "Rocks", 238)).toBe(true)
	expect(signatureValidation("Is this valid?", "No", 210)).toBe(false)
	expect(signatureValidation("Is this valid?", "Yes", 233)).toBe(true)
	expect(signatureValidation("Check out the freeCodeCamp podcast,", "in the mobile app", 514)).toBe(true)
})