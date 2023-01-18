/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
//  we know that the first 2 are not included becasue they are not numbers/important in this case
// if the length is less tha 3 that means that the only the first two exist therefore it does not provide an operation
// index 2 is for the operation
// if the length is less than 4 it only provides an operation but no numbers
// index 3+ are for the numbers

    if (process.argv.length < 3) {
        return "No operation provided..."
    } else if (process.argv.length < 4) {
        return "No numbers provided..."
    }
    
// if its plus it should add all of the numbers up
// index 2 should say plus
// sum should begin at 0 so we have a starting base
// i=3 because that when the numbers begin
    if (process.argv[2] === "plus") {
        let sum = 0
        for (let i = 3; i < process.argv.length; i++) {
            sum += Number(process.argv[i]); 
        }
        return sum
    }
//  if its minus it should be subtracting the numbers
// index 2 should say minus
// diff should be the starting base instead of 0, this way it knows to start subtracting from there and so on. If it were to be zero it would be negative.
// i=4 because the index 3 is being used as the base therefore it should begin checking the following number
    if (process.argv[2] === "minus") {
        let diff = process.argv[3]
        for (let i = 4; i < process.argv.length; i++) {
        let total = 
        diff -= Number(process.argv[i]);
        }
        return diff
    }
//  if plus or minus dont exist then it should return its invalid
// this should be last so that the return does not mess it up
    if (process.argv[2] !== 'plus' || process.argv[2] !== 'minus'){
        return "Invalid operation: modulo"
    }
}

// Don't change anything below this line.
module.exports = calculator;
