/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
if (process.argv.length === 3) {
        return "No number provided..."
    }
        if (process.argv.length < 3) {
            return "No operation provided..."
        }   
                // index in 2 is not plus or minus
            if (process.argv[2] !== "plus" && process.argv[2] !== "minus") {
                return "Invalid operation: modulo";
            }

    let fullAmount = 0
if (process.argv === "plus") {
    for (let num = 3; num < process.argv[3]; num++) {
    fullAmount = process.argv[num]
}
}
    if (process.argv === "minus") {
    for (let num = 4; num < process.argv; num++) {
        fullAmount = process.argv[num]
    }
    }

    return fullAmount;
}

// Don't change anything below this line.
module.exports = calculator;
