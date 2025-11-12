import { dive } from "./hidden-treasure";
import { expect, test } from 'vitest'

test('dive', () => {
	expect(dive([["-", "X"], ["-", "X"], ["-", "O"]], [2, 1])).toEqual("Recovered");

	expect(dive([["-", "X"], ["-", "X"], ["-", "O"]], [2, 0])).toEqual("Empty");

	expect(dive([["-", "X"], ["-", "O"], ["-", "O"]], [1, 1])).toEqual("Found");

	expect(dive([["-", "-", "-"], ["X", "O", "X"], ["-", "-", "-"]], [1, 2])).toEqual("Found");

	expect(dive([["-", "-", "-"], ["-", "-", "-"], ["O", "X", "X"]], [2, 0])).toEqual("Recovered");

	expect(dive([["-", "-", "-"], ["-", "-", "-"], ["O", "X", "X"]], [1, 2])).toEqual("Empty");
});