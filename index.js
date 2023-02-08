/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    if (process.argv.length === 3) {
        return "No numbers provided...";
    }
    if (process.argv.length < 3) {
        return "No operation provided...";
    }
    if (process.argv[2] !== "plus" && process.argv[2] !== "minus") {
        return "Invalid operation: modulo";
    }        //Number(process.argv[3] = 1    
    let fullAmount = Number(process.argv[3]);

    for (let num = 4; num < process.argv.length; num++) {
   // process.argv[2] = plus
   if (process.argv[2] === "minus") {  
    fullAmount -= Number(process.argv[num]);
    } 
        if (process.argv[2] === "plus") {
            {    
    // Number(process.argv[3]) = 5 
    // Number(process.argv[num]) = 10
                fullAmount += Number(process.argv[num]);
            }
           //full amount = 15 - Number(process.argv[num]) = 10
              //full amount = 10
        }
        }
        return fullAmount;
    }
    



// Don't change anything below this line.
module.exports = calculator;
