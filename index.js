/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
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
    
    const numbers = process.argv.slice(3).map(Number);
    let result;

    switch (operation) {
        case "plus":
            result = numbers.reduce((a, b) => a + b);
            break;
        case "minus":
            result = numbers.reduce((a, b) => a - b);
            break;
        case "multiply":
            result = numbers.reduce((a, b) => a * b);
            break;
        case "divide":
            if(numbers.length>1){
                result = numbers.reduce((a, b) => a / b);
            }else{
                console.log("Invalid operation: divide");
                return;
            }
            break;
        default:
            console.log("Invalid operation: ", operation);
            return;
    }
    return result;
}

calculator();


// Don't change anything below this line.
module.exports = calculator;
