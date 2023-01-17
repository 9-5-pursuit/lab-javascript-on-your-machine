/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
// index.js[2] = "plus" || "minus"

        if (process.argv.length < 3) {
            return "No operation provided...";
        }
        if (process.argv.length < 4) {
            return "No numbers provided...";
        }        
            let sum = Number(process.argv[3]);  // since the first argument is the kind of calculation, the first numeric argument will be in index 3
                if (process.argv[2] === "plus") {
                    for (let i = 4; i < process.argv.length; i++) {
                    sum += Number(process.argv[i]);
                    }
                return sum;
                }
                if (process.argv[2] === "minus") {
                    for (let i = 4; i < process.argv.length; i++) {
                    sum -= Number(process.argv[i]);
                    }
                return sum;
        }  
        if (process.argv[2] !== "plus" || "minus") {
            return ("Invalid operation: " + process.argv[2])
        }
        
}
console.log(calculator());
// Don't change anything below this line.
module.exports = calculator;
