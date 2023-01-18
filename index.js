/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
console.log(process.arg)

 if (process.argv[2] === undefined){
    return "No operation provided..."
}
if (process.argv.numbers === undefined){
    return "No numbers provided..."
}
if (process.argv.command !== "plus" || process.argv.command !== "minus"){
    return "Invalid operation: modulo"
}

 let sub = 0
if  (process.argv.command === "minus"){
   for (let i = 3; i < progress.argv.length; i++){
       sub -= Number(progress.argv[i])
      }
      return sub; 
 
}
 let sum = 0
if  (process.argv.command === "plus"){
    for (let b = 3; b < progress.argv.length; b++){
        sum += Number(progress.argv[b])
       }
       return sum; 
       
}

}
console.log(calculator())

// Don't change anything below this line.
module.exports = calculator;
