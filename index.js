/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */

// Note to self for my `slice()` slice() method is used to extract a portion of an array and returns a new array. In this case, the slice() method is used to get all the elements in process.argv array starting from the 3rd element (index 2) and up to the end of the array. This allows to get only the numbers passed as arguments and ignore the first 2 elements of the process.argv array.

function calculator() {
  // I'll get the operation from the second element of process.argv
  const operation = process.argv[2];
  // Get the numbers from the rest of the elements in process.argv
  const numbers = process.argv.slice(3);

  // Check if an operation was provided or not sensei anthony wise words!
  if (!operation) {
    return "No operation provided...";
  }
  // Check if numbers were provided
  if (!numbers.length) {
    return "No numbers provided...";
  }
  // Check if the operation is valid (either "plus" or "minus")
  if (operation !== "plus" && operation !== "minus") {
    return `Invalid operation: ${operation}`;
  }

  let result = Number(numbers[0]);
  for (let i = 1; i < numbers.length; i++) {
    // If operation is "plus", add the current number to the result
    if (operation === "plus") {
      result += Number(numbers[i]);
    }
    // If operation is "minus", subtract the current number from the result
    else if (operation === "minus") {
      result -= Number(numbers[i]);
    }
  }
  // Return the final result
  return result;
}

// Don't change anything below this line.
module.exports = calculator;
