/*
Given a 2D array representing a map of the ocean floor that includes a hidden treasure, and an array with the coordinates ([row, column]) for the next dive of your treasure search, return "Empty", "Found", or "Recovered" using the following rules:

The given 2D array will contain exactly one unrecovered treasure, which will occupy multiple cells.

Each cell in the 2D array will contain one of the following values:

"-": No treasure.
"O": A part of the treasure that has not been found.
"X": A part of the treasure that has already been found.
If the dive location has no treasure, return "Empty".

If the dive location finds treasure, but at least one other part of the treasure remains unfound, return "Found".

If the dive location finds the last unfound part of the treasure, return "Recovered".

For example, given:

[
  [ "-", "X"],
  [ "-", "X"],
  [ "-", "O"]
]
And [2, 1] for the coordinates of the dive location, return "Recovered" because the dive found the last unfound part of the treasure.
*/
export function dive(map: string[][], coordinates: [number, number]): "Empty" | "Found" | "Recovered" {
    const [row, col] = coordinates;
    const currentSpot = map[row][col];
    // empty -> '-'
    if (currentSpot === '-') {
        return "Empty";
    }
    
    //  count remaining '0'
    let treasureCount = 0;
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            if (map[i][j] === 'O') {
                treasureCount++;
            }
        }
    }
    // if on 'x' and there are '0'
    if (currentSpot === 'X' && treasureCount > 0) {
        return "Found";
    }

	// if on 'x' and no'0'
    if (currentSpot === 'X') {
        return "Empty";
    }

    // if on '0' and it's only one '0';
    if (currentSpot === 'O' && treasureCount === 1) {
        return "Recovered";
    }
    // if on '0' and there are other '0'
    if (currentSpot === 'O') {
        return "Found";
    }
    return "Empty";

}