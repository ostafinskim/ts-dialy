/*
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
*/

export default function getCount(str: string): number {
	return str.match(/[aeiou]/g)?.length ?? 0
}

// It will find every occurences of (a,e,i,o,u) in the provided str
// and returns them in an array
// then if array has length it will return it or 0 ( not found)

// getCount("abracadabra") => 5