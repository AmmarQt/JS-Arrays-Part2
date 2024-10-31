/**
 * isArrayLengthOdd(numbers):
 * - receives array `numbers`
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> flase
 */

//const numbers = [1,7,5,3,2];

function isArrayLengthOdd(numbers) {
  const sizeOfArray = numbers.length;
  if (sizeOfArray % 2 === 0) {
    return false;
  } else {
    return true;
  }
}
//console.log(isArrayLengthOdd(1,3,4));
//console.log(isArrayLengthOdd([1,2]));

/**
 * isArrayLengthEven(numbers):
 * - receives array `numbers`
 * - returns true if array has an even number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthEven([1, 2, 3]) -> false
 * isArrayLengthEven([1, 2, 3, 4]) -> true
 */
function isArrayLengthEven(numbers) {
  if (numbers.length % 2) {
    return false;
  } else {
    return true;
  }
}
console.log(isArrayLengthEven([1, 2, 3, 4]));

/**
 * addLailaToArray(instructors):
 * - receives array `instructors`
 * - returns a new array that's a copy of array `instructors` with additional string "Laila"
 *
 * e.g.
 * addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
 */
function addLailaToArray(instructors) {
  const newInstructors = instructors;
  newInstructors.push("Laila");
  return newInstructors;
}

console.log(addLailaToArray(["Ali", "jassem"]));

/**
 * eliminateTeam(teams):
 * - receives array `teams`
 * - removes the last element from the array and return it
 *
 * e.g.
 * eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
 */
function eliminateTeam(teams) {
  const removesLastElement = teams.pop();

  return removesLastElement;
}

console.log(eliminateTeam(["Brazil", "Germany", "Italy"]));
