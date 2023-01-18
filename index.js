/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
*/

// use if statement
// most likely going to need for loop

function calculator() {
if (process.argv.length < 3) {
    return "No operation provided..."; // returns error msg if theres no operation, 2nd index in array
}

let argumentLength = process.argv.length

if (argumentLength === 3) {
    return "No numbers provided..."; // returns error msg if theres no numbers
}

let mathSign = process.argv[2];

if (mathSign !== "plus" && mathSign !== "minus") {
    return `Invalid operation: ${mathSign}`; // returns error msg if the operation isnt plus or minus
}

let total = 0;

if (mathSign === "plus") {
    for (let i = 3; i < argumentLength; i++) {
        total += Number(process.argv[i]);
    }
}

console.log(process.argv);
if (mathSign === "minus") {
    total = process.argv[3];

        for (let i = 4; i < argumentLength; i++) {
            total -= Number(process.argv[i]);
        }
}
 
return total;

}

// plus needs to add up two or more numbers from left to right
// can also add up negative numbers



// Don't change anything below this line.
module.exports = calculator;
