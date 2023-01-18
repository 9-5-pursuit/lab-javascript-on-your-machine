/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    const operation = process.argv.splice(0,3)[2];
    const numbers = process.argv.sort((a, b) => {b - a;});
    console.log("numbers is: " + numbers);

    function loopAccumulator(op, []) {
        const num = Array.from(numbers);
        let accumulator = Number(num[0]);
     
        for (let i = 1; i < numbers.length; i++) {
            (op === "+") ? (accumulator += Number(num[i])) : accumulator -= Number(num[i]);
        };

        return accumulator;
    };
    
    return (operation === undefined) ? "No operation provided..."
    : (operation === "divide") ? "Invalid operation: divide"
    : (numbers.length === 0) ? "No numbers provided..."
    : (operation === "plus") ? loopAccumulator("+", numbers)
    : (operation === "minus") ? loopAccumulator("-", numbers)
    : ("plus" != operation || "minus" != operation) ? "Invalid operation: modulo"
    : null;

};

console.log(calculator());

// Don't change anything below this line.

module.exports = calculator;
