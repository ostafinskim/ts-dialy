/**
 * Given the date of someone's birthday in the format YYYY-MM-DD, return the person's age as of November 27th, 2025.

Assume all birthdays are valid dates before November 27th, 2025.
Return the age as an integer.
Be sure to account for whether the person has already had their birthday in 2025.
 */

export default function calculateAge(birthday: string): number {
	// birthday is in "YYYY-MM-DD" format
	const [year, month, day] = birthday.split("-").map(Number);

	const currentYear = 2025;
	const currentMonth = 11;
	const currentDay = 27;

	let age = currentYear - year;

	// If birthday has not occurred yet in 2025, subtract 1
	if (month > currentMonth || (month === currentMonth && day > currentDay)) {
		age -= 1;
	}

	return age;
}