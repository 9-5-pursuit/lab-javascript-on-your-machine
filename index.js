/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */

function calculator() {
    
    const operator = process.argv[2];// to access the 3rd element of the array that is after the DEFAULT strings
    const numbers = process.argv.slice(3);//to access the 4th element and beyond of the array after the DEFAULT strings and the operator
  
//const operator =[ "js", "sdd", "plus", "1", "2", "3"]
//const numbers = ["1", "2", "3", "4"]

    
 //we are use the operators variable that we previously set to check if a operator is provided and returning the error message if there no no operators provided,


 if (!operator) {
      return "No operation provided...";
    } // end of if operator statement
   

/* we set numbers as a variable that gives us the array that includes the 4th element and beyond, so we must use it in our if statement to check if numbers are provided. */
//We numbers.length because if there is no length, there aren't any numbers provided and returning the given error message if there are no numbers provided

if (!numbers.length) {
      return "No numbers provided...";
    }//end of if numbers statement
    
    // we are checking if the operatior equals the strings of "plus" or "minus" and returning an error message if it does not.
    //was not passing when i used the || so i switched to && and it passed

    if (operator !== "plus" && operator !== "minus") {
      return `Invalid operation: ${operator}`;
    } //end of if statement
  

//creating a result variable that turns the string stored in numbers[] (the array) into a Number by using the Number() method.


let result = Number(numbers[0]);//turns string into a number

/* Example
operator =[ "js", "sdd", "plus", "1", "2", "3"]
numbers = ["1", "2", "3"]
numbers[0]=> "1"
Number(numbers[0])=> 1 */
   

    /* If operator is equal to the string "plus", add the current number to the result. I started at 1 because if i start at 0 the lenth of the array that holds the NUMBERS would not exist and therefore the could would not execute*/ 
    for (let i = 1; i < numbers.length; i++) {
      
    // If operator is equal to the string "minus", add the current number to  the result
      if (operator === "plus") {
        result += Number(numbers[i]);
      } //end of if statement

      //else if the operator is equal to the string "minus", subtract the current number from the result
      else if (operator === "minus") {
        result -= Number(numbers[i]);
      } //end of else if statement
    } //end of for loop

    // Return the final result
    return result;
  }//end of function



// console.log(calculator())
// Don't change anything below this line.
module.exports = calculator;
