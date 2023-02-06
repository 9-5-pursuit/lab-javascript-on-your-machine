/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    return "No operation provided...";
  }
  const firstArg = args[0];
  if (firstArg !== "plus" && firstArg !== "minus") {
    return "Invalid operation: modulo";
  }

  const secondArg = args[1];
  if (isNaN(secondArg)) {
    return "No numbers provided...";
  }
  let result = 0;

  for (let i = 1; i < args.length; i++) {
    if (firstArg === "plus") {
      result += Number(args[i]);
    } else if (firstArg === "minus" && i === 1) {
      result = Number(args[i]);
    } else {
      result -= Number(args[i]);
    }
  }
  console.log(result);
  return result;
}

// Don't change anything below this line.
module.exports = calculator;
