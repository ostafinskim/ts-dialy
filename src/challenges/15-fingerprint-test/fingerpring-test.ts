/*
Given two strings representing fingerprints, determine if they are a match using the following rules:

Each fingerprint will consist only of lowercase letters (a-z).
Two fingerprints are considered a match if:
They are the same length.
The number of differing characters does not exceed 10% of the fingerprint length.
*/

export default function isMatch(fingerprintA: string, fingerprintB: string): boolean {

	if (fingerprintA.length !== fingerprintB.length) return false

	let differences: number = 0;
	for (let i = 0; i < fingerprintA.length; i++) {
		if (fingerprintA[i] !== fingerprintB[i]) {
			differences++
		}
	}

	const maxAllowed = fingerprintA.length * 0.1;

	return differences <= maxAllowed;

}