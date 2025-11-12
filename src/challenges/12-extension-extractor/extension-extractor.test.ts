import getExtension from "./extension-extractor"
import { expect, test } from 'vitest'

test('getExtension', () => {
	expect(getExtension("document.txt")).toBe("txt")
	expect(getExtension("README")).toBe("none")
	expect(getExtension("image.PNG")).toBe("PNG")
	expect(getExtension(".gitignore")).toBe("gitignore")
	expect(getExtension("archive.tar.gz")).toBe("gz")
	expect(getExtension("final.draft.")).toBe("none")
})