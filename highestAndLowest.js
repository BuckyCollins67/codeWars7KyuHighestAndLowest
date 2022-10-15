//  DESCRIPTION:
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// P - Parameters
// The function will recieve a string of numbers.
// Numbers will always be numbers, not spelled out numbers.

// R - Returns
// The function is expected to return a string.
// The function is expected to return the highest number first
// The function is expected to return the lowest number second after a space.

// E - Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// P - Pseudocode
// 1.  Get the numbers
//       Transfer them as an actual value into an array
// 2.  Iterate through the array
//       