import sort from "./email-sorter";
import { expect, test } from 'vitest'

test('email sort', () => {
	expect(sort(["jill@mail.com", "john@example.com", "jane@example.com"])).toStrictEqual(["jane@example.com", "john@example.com", "jill@mail.com"]),
		expect(sort(["bob@mail.com", "alice@zoo.com", "carol@mail.com"])).toStrictEqual(["bob@mail.com", "carol@mail.com", "alice@zoo.com"]),
		expect(sort(["user@z.com", "user@y.com", "user@x.com"])).toStrictEqual(["user@x.com", "user@y.com", "user@z.com"]),
		expect(sort(["sam@MAIL.com", "amy@mail.COM", "bob@Mail.com"])).toStrictEqual(["amy@mail.COM", "bob@Mail.com", "sam@MAIL.com"]),
		expect(sort(["simon@beta.com", "sammy@alpha.com", "Sarah@Alpha.com", "SAM@ALPHA.com", "Simone@Beta.com", "sara@alpha.com"])).toStrictEqual(["SAM@ALPHA.com", "sammy@alpha.com", "sara@alpha.com", "Sarah@Alpha.com", "simon@beta.com", "Simone@Beta.com"])
})