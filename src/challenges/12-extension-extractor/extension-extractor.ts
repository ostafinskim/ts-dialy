/*
Given a string representing a filename, return the extension of the file.

The extension is the part of the filename that comes after the last period (.).
If the filename does not contain a period or ends with a period, return "none".
The extension should be returned as-is, preserving case.
*/
export default function getExtension(filename: string): string {
	let lastIndex = filename.lastIndexOf('.');

	if (lastIndex < 0 || lastIndex + 1 === filename.length) {
		return 'none'
	}

	return filename.substring(lastIndex + 1);
}