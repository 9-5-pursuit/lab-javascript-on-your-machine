/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
let num = 0;
if (process.argv.length < 3) {
    return "No operation provided...";
}
if (process.argv.length < 4) {
    return "No numbers provided...";
}

const operation = process.argv[2];
if (operation !== "plus" && operation !== "minus"){
    return `Invalid operation: ${operation}`;
}

if(operation === 'plus'){
    for(let i = 3; i < process.argv.length; i++){
        num += Number(process.argv[i]);
    }
}
if(operation === 'minus'){
    num = Number(process.argv[3]);
    for(let i = 4; i < process.argv.length; i++){
        num -= Number(process.argv[i]);
    }
}
return num;
}



// Don't change anything below this line.
module.exports = calculator;
