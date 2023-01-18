/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
   
   if(process.argv !== 'plus' && process.argv !== 'minus'){ // Check out if there is an operation 
    return "No operation provided..."
   }
   // Check out if there is an numbers
    
   if(process.argv[1] !== 'plus'){ 
    return "No numbers provided..."
   }
   // Check out if the operation uses plus or minus
   if(process.argv !== 'plus' || process.argv !== 'minus'){
    return `Invalid operation: modulo`
   }

   for(let i = 2; i < process.argv.length; i++){
    let sum = 0
    if(process.argv.command === "plus"){
        numbers += process.argv.length
    }
    return sum
   }

   for(let i = 2; i < process.argv.length; i--){
    let subtract = 0
    if (process.argv === "minus"){
        numbers -= process.argv.length
    }
    return subtract
   }

}

// Don't change anything below this line.
module.exports = calculator;
