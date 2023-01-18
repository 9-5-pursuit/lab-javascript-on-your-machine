/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    
    if (!process.argv[2]) {  // [0]-file path to node [1]-file path to file are default
        return "No operation provided...";  // [2]-should be either "plus" or "minus"
    }
    if (!process.argv[3]) {  //[3]-number
        return "No numbers provided...";
    }
    if (process.argv[2] !== 'plus' && process.argv[2] !== 'minus') {
        return `Invalid operation: ${process.argv[2]}`
    }
    let sum = Number(process.argv[3]);  // since the number starts at index[3] so we stored the first number
    for (let i = 4; i < process.argv.length; i++) { // loop through from second number which is index[4]
        if (process.argv[2] === 'plus') {
               sum += Number(process.argv[i]);
           }
           
    
    if (process.argv[2] === 'minus') {
        sum -= Number(process.argv[i]);
    }   
    }
    return sum;
    



}

// Don't change anything below this line.
module.exports = calculator;
