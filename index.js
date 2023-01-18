/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
/**
* I started off my calculator function with the result variable established and assigned to zero to ensure I wouldn't forget to convert the incoming strings of numbers to actual numbers for when
* the result is returned. Then I set up a way to sort for if an operation was given, then which operation was given. This way an issue is caught before calculations are attempted.
* After that I set up for "plus" or "minus" being passed in to the function, and how the calculator would do the math to give the sum or the difference, accordingly.
* Once the calculations are done, the calculator will return the result of either "plus" or "minus".
*/
function calculator() {
    let result = 0;
    if (process.argv.length >= 3) { // array length minimum to give an operation.
        if (process.argv.length === 3) { // array length did not provide for any numbers to be calculated.
            return "No numbers provided...";
        }
        else if (!process.argv.includes("plus") && !process.argv.includes("minus")) { // operation given was not one this calculator can process.
            return `Invalid operation: ${process.argv[2]}`;
        }
        else if (process.argv.length > 3) { // array length mimimum to give an operation and at least a number.
            if (process.argv.includes("plus")) {
            for (let i = 3; i < process.argv.length; i++) { // set i to index number 3 since that is where the numbers begin.
                    result += Number(process.argv[i]); // converts strings to numbers to carry out summation.
                }
            }
            if (process.argv.includes("minus")) {
                result = process.argv[3]; // set result to index number 3 to ensure the order of the numbers begins with the first number and won't immediately subtract from zero.
                for (let j = 4; j < process.argv.length; j++) { // set j to index number 4 since result is already set to the first number to subtract from.
                    result -= (Number(process.argv[j])); // converts strings to numbers to carry out differentiation.
                }
            }
            return result; // returns result of "plus" or "minus".
        }
    }
    else {
        return 'No operation provided...'; // array length was less than 3 and therefore did not give an operation.
    }
}

// Don't change anything below this line.
module.exports = calculator;
