/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
  let result;
  //console.log(process.argv);
  //Commands = "minus", "plus","modulo"
  // Unique case any other command should return invalid operation e.g modulo
  let whatToDo = process.argv[2]; // isolates the command
  let numberArray = [];
  let sum = 0;
  //console.log(typeof numberArray);
  console.log(process.argv);

  //------errorHandling----------------//
  if (whatToDo === undefined) {
    return "No operation provided...";
  } else if (process.argv.length <= 3) {
    return "No numbers provided...";
  } else if (whatToDo !== "plus" && whatToDo !== "minus") {
    return "Invalid operation: modulo";
  }

  //--------Creates an array containing all the numbers needed------------//

  if (whatToDo === "plus") {
    for (let i = 3; i < process.argv.length; i++) {
      sum += Number(process.argv[i]);
    }
    return sum;
  } else if (whatToDo === "minus") {
    sum = Number(process.argv[3]);
    for (let i = 4; i < process.argv.length; i++) {
      sum -= Number(process.argv[i]);
    }
    return sum;
  }
}

// Don't change anything below this line.
module.exports = calculator;
