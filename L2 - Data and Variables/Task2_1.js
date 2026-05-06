// Task 2.1: Simple Variable Practice
// Part 1 Working with Variables
// 1. Declare two variables: admin and firstName.
let admin;
let firstName;
// 2. Assign the value "John" to name.
firstName = "John";
// 3. Copy the value from name to admin.
admin = firstName;
// 4. Show the value of admin using console.log (must output “John”).
console.log(admin);

// Part 2 Giving the Right Name
// 1. Create a variable with the name of our planet. How would you name such a variable?
let ourPlanet = "Earth";

// 2. Create a variable to store the name of a current visitor to a website. How would you name that variable?
let visitorName;

// STRINGS
let name = "Carl";
alert(`hello ${1}`); // hello 1
alert(`hello ${"name"}`); // hello name
alert(`hello ${name}`); // hello Carl

// Input
function ex() {
  /* Create a script that will PROMPT the user for two numbers
   Then it will add them together and place it in the console.   */
  let num1 = prompt("What is your first number?");
  let num2 = prompt("What is your second number?");
  let result = num1 + num2;
  console.log(result);
  // Run your function by typing ex() in the console //
  // You can use the ex() function as the start of your solution to q1() //
} //Example Script
