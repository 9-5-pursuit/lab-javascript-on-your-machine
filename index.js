/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    let result;
    let firstNum = Number(process.argv[3]);
    if (process.argv.length < 3) {
        result = 'No operation provided...';
    }
    if (process.argv.length === 3) {
        result = 'No numbers provided...';
    }
    if (process.argv[2] !== 'plus' && process.argv[2] !== 'minus' && process.argv[2] !== undefined) {
        result = `Invalid operation: ${process.argv[2]}`
    } 
    if (process.argv[2] === "minus") {
        for (i = 4; i < process.argv.length; i++) {
            result = firstNum -= Number(process.argv[i]);
        } 
    }
    if (process.argv[2] === "plus") {
        for (i = 4; i < process.argv.length; i++) {
            result = firstNum += Number(process.argv[i]);
        }
    }
    return result;
    }



// Don't change anything below this line.
module.exports = calculator;
