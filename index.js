/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
//    console.log(process.argv[3]);
    //let number = process.argv.length;
   //let result  
   //let sum = 0;
   console.log(process.argv);
if (process.argv.length < 3){
    return "No operation provided..."
    }


// proces.argv = [ // '/usr/local/bin/node',
//'/Users/rubenslombard/lab-javascript-on-your-machine/run.js']

  else if (process.argv.length < 4 ){
    return "No numbers provided...";

 } else if (process.argv[2] !== `plus` && process.argv[2] !== `minus`){
    return ("Invalid operation: modulo")
 }
let result = 0;

    if (process.argv[2] === `plus`) { 
    for (let i = 3; i < process.argv.length; i++) {
        result += Number(process.argv[i]); 
      }
    }
    if (process.argv[2] === `minus`) {
        result = process.argv[3]
        for (let i = 4; i < process.argv.length; i++) {
     
            result -= Number(process.argv[i]);
        }
    }
        return result;
    }
    
 //const numbers = ["5", "10"];
 
//  let num = process.argv.push(numbers[0]);
 
//  let num1 = process.argv.push(numbers[1]);
 
//  const result = Number(process.argv[2]) + Number(process.argv[3]) ;
 

// for (let i = 2; i < process.argv.length; i++){
//     number += Number(process.argv[i]);
// }


//   return Number(sum) ;  

// Don't change anything below this line.
module.exports = calculator;
