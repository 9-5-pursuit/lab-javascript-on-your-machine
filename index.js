/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    //Checks if any arguments have been passed
    if (process.argv.length < 3) {
        return "No operation provided...";
    }

    if (process.argv.length < 4) {
        return "No numbers provided...";
    }

    // Checks if the first argument is "plus" or "minus"
    if (process.argv[2] !== "plus" && process.argv[2] !== "minus") {
        return "Invalid operation: modulo";
    }
    
    //Starts at the first number in index 3 because index 2 is the operation ("plus" or "minus")
    //Number converts string into number 
   let sum = Number(process.argv[3]) 

   //Loops through the rest of the arguments while adding or subtracting from the sum
    for (let i = 4; i < process.argv.length; i++) {
        
        if (process.argv[2] === "plus") {
        
            sum += Number(process.argv[i]);
        
        } else if (process.argv[2] === "minus") {
            
            sum -= Number(process.argv[i]);
        }
    }

    return sum;
}
    
// Don't change anything below this line.
module.exports = calculator;
