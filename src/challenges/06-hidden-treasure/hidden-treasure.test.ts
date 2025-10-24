import { dive } from "./hidden-treasure";

test('dive', () => {
	// Test 1: Powinien znaleźć ostatni skarb
	expect(dive([["-", "X"], ["-", "X"], ["-", "O"]], [2, 1])).toEqual("Recovered");

	// Test 2: Powinien zwrócić Empty dla pustego pola
	expect(dive([["-", "X"], ["-", "X"], ["-", "O"]], [2, 0])).toEqual("Empty");

	// Test 3: Powinien znaleźć część skarbu, ale nie ostatnią
	expect(dive([["-", "X"], ["-", "O"], ["-", "O"]], [1, 1])).toEqual("Found");

	// Test 4: Powinien znaleźć część skarbu w środku mapy
	expect(dive([["-", "-", "-"], ["X", "O", "X"], ["-", "-", "-"]], [1, 2])).toEqual("Found");

	// Test 5: Powinien znaleźć ostatni skarb na dole mapy
	expect(dive([["-", "-", "-"], ["-", "-", "-"], ["O", "X", "X"]], [2, 0])).toEqual("Recovered");

	// Test 6: Powinien zwrócić Empty dla pustego pola w środku mapy
	expect(dive([["-", "-", "-"], ["-", "-", "-"], ["O", "X", "X"]], [1, 2])).toEqual("Empty");
});