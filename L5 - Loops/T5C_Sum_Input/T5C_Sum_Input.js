/*For each function, complete the question. Make sure to notice the OUTPUT requirement.
  !!! You can call your functions in the console or through prompt.  !!!  */

function t1() {
  // Asks the user for values using prompt and stores the values in the array.
  // Finishes asking when the user enters an empty string.
  let numArry = []; // MAKE EMPTY ARRAY
  let userNum = prompt("First number?"); // INITIAL - users first number
  while (userNum != "" && userNum != null) {
    // CHECK - for not empty string
    numArry.push(Number(userNum)); // DO SOMETHING - add input to array after converting to NUMBER
    userNum = prompt("Next number?"); // CHANGE - get user's next number
  }
  console.log(numArry); // DEBUG - print finished array to console

  // Calculates and returns the sum of array items.
  let total = 0;
  for (let num of numArry) {
    total += num;
  }
  console.log(`The sum is: ${total}.`);
  // P.S. A zero 0 is a valid number, please don’t stop the input on zero.
} //  sum of user input
