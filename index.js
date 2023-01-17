/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done.
 *  Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    
    if(process.argv.length < 3){
            return (`No operation provided...`);
        }

    else if(process.argv[2] !== "plus" && process.argv[2] !== "minus"){
            return (`Invalid operation: ${process.argv[2]}`);
    }

    else if(process.argv.length === 3 ) {
          
            return (`No numbers provided...`);
            
        }
            
    if (process.argv[2] === "plus"){
        let result = 0;
     
        for (let i = 3; i < process.argv.length ; i++){
            result += Number(process.argv[i]);

        }
        return result;
    }
  
    else if (process.argv[2] === "minus"){
        let result_1 = process.argv[3];
        for (let j = 4; j < process.argv.length ; j++){
            result_1 -= Number(process.argv[j]);
        }
        return result_1;
    }
    
}
console.log(calculator());

// Don't change anything below this line.
module.exports = calculator;

