/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */

/**
 * - 1. checked if process. argv.length was less than 3 that means nothing was passed as arguements so it would return no operation provided
 * - 2. checked if process.argv.length was passed numbers starting at index 3 but if the length is less then 4 then number(s) arent provided return string
 * - 3. assigned command var to index 2 of process.argv
 * - 4. assigned sum to index 3 of process.argv and made it a number with number()
 * - 5. if statements
 *      - if command = string 
 *      - for loops to do the math starting at index 4 because number para is on index 3 and i want my math to add from 4 and on (or subtract from 4 and on)
 *      - return sum
 * - 6. if statement if command doesnt not equal both stringsnested if statement
 *      - if command equals string then return invalid op: modulo
 */
function calculator() {
    if (process.argv.length < 3) {

        return "No operation provided..."

    } if (process.argv.length < 4) {
        return "No numbers provided..."
    }

    let command = process.argv[2];
    let sum = Number(process.argv[3])

    if (command === "plus"){

        for (let i = 4; i < process.argv.length; i++){
        sum += Number(process.argv[i])
        } return sum

    } else if (command === "minus") {

        for (let i = 4; i < process.argv.length; i++){
            sum -= Number(process.argv[i])
        
        } return sum;

    } else if (command !== "plus" && command !== "minus") {
        if (command === "modulo") {
            return "Invalid operation: modulo"
        }
    }
}


// Don't change anything below this line.
module.exports = calculator;
