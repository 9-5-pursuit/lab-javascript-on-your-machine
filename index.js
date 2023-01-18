/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numberdo {
	s
}  (for (let index = 0; index < array.length; index++) {
	const element = array[index];
	condition
}); or subtract all of the numbers, from left to right.
* @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {

    if (process.argv.length < 3){
        return "no arguments providedd";
    }
     let sum = process.argv[2];
    
     for (let i = 2; i < process.argv.length; i++ ){
       if (process.argv[i] === 'minus') {
         sum -= Number(process.argv[i]);
    } else if (process.argv[i] === 'plus'){
        sum += Number(process.argv[i]);
    }

}
return sum 
}
console.log(calculator())



// Don't change anything below this line.
module.exports = calculator;
