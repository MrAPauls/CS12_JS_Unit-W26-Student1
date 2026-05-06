/*For each function, complete the question. Make sure to notice the OUTPUT requirement.
  !!! You will CALL your functions in the console.  !!!  */
"use strict";

function t1() {
  /* Task 1:  Using if;..else, write the code which gets a number via prompt and then shows in alert:
		1, if the value is greater than zero,
		-1, if less than zero,
		0, if equals zero. */
  let num = Number(prompt("What is your number?", 123));
  if (num > 0) {
    alert(1);
  } else if (num < 0) {
    alert(-1);
  } else {
    alert(0);
  }
} //  the sign of a number

function t2() {
  /*Write the code which asks for a login with prompt.
  If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.
  */
  let userName = prompt("Login: Username");
  if (userName == "Admin") {
    let password = prompt("Password: ");
    if (password == "TheMaster") {
      alert("Welcome!");
    } else if (password == "" || password == null) {
      alert("Canceled");
    } else {
      alert("Wrong password");
    }
  } else if (userName == "" || userName == null) {
    alert("Cancelled");
  } else {
    alert("Unidentified user. I don't know you!");
  }

  /*The password is checked as follows:
  If it equals “TheMaster”, then show “Welcome!”,
  Another string – show “Wrong password”,
  For an empty string or cancelled input, show “Canceled”
  The schema:
  Please use nested if blocks. Mind the overall readability of the code.
Hint: passing an empty input to a prompt returns an empty string ''. Pressing ESC during a prompt returns null.
 */
} //Check the Login

function t3() {
  /* Write an if condition to check that age is between 14 and 90 inclusively.
“Inclusively” means that age can reach the edges 14 or 90.
*/
  let num = Number(prompt("What is your number?"));
  if (num >= 14 && num <= 90) {
    alert("Between!");
  } else {
    alert("NOT between!");
  }
} //Check Range Between

function t4a() {
  /*Write an if condition to check that age is NOT between 14 and 90 inclusively.  */
  let num = Number(prompt("What is your number?"));
  if (num < 14 || num > 90) {
    alert("Outside range");
  }
} //Check Range outside

function t4b() {
  /*Create two variants: the first one using NOT !, the second one – without it. */
  let num = Number(prompt("What is your number?"));
  if (!(num >= 14 && num <= 90)) {
    alert("Outside Range!");
  }
} //Check Rang outside
