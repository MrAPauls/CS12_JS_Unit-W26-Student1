/*For each function, complete the question. Make sure to notice the OUTPUT requirement.
  !!! You can call your functions in the console or through prompt.  !!!  */

function t1() {
  /*Exercise #1: Construct for loops that accomplish the following tasks:*/
  //a. Print the numbers 0 - 20, one number per line.
  console.log("Ex 1: ------------------");
  for (let i = 0; i <= 20; i++) {
    console.log("Ex1:", i);
  }
  //b. Print only the ODD values from 3 - 29, one number per line.
  console.log("Ex 2: --------------------");
  for (let i = 3; i <= 29; i += 2) {
    console.log("Ex2", i);
  }
  //c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
  console.log("Ex 3: ------------------");
  for (let i = 12; i >= -14; i--) {
    console.log("Ex3:", i);
  }
  //d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3.
  console.log("Ex 4: ------------------");
  for (let i = 50; i >= 20; i--) {
    if (i % 3 == 0) {
      console.log("Ex4:", i);
    }
  }
  //** (Your code should work even if you replace 50 or 20 with other numbers).
}

function t2() {
  /*Exercise #2:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */
  let numArr = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
  let evenArr = [];
  let oddArr = [];

  for (let num of numArr) {
    // Check if num is even, if true add num to evenArr
    if (num % 2 == 0) {
      evenArr.push(num);
    }
    //else, add num to oddArr
    else {
      oddArr.push(num);
    }
  }
  console.log(`Even: ${evenArr} and Odd: ${oddArr}`);
}
