/*For each function, complete the question. Make sure to notice the OUTPUT requirement.
  !!! You can call your functions in the console or through prompt.  !!!  */

function t1() {
  //Define three variables for the a SpaceShip shuttle
  //- one for the starting fuel level,
  // another for the number of astronauts aboard,
  //and the third for the altitude the shuttle reaches.

  let altitude = 0;

  /*Exercise 1: Construct while loops to do the following:
  //a. Query the user for the starting fuel level. VALIDATE that the user enters a positive, integer value greater than 5000 but less than or equal 30000. */
  let fuel = Number(prompt("Starting Fuel Level:")); // INITIAL
  while (fuel < 5000 || fuel > 30000 || isNaN(fuel)) {
    // CHECK
    alert("Fuel must be between 5000 and 30000."); //DO STUFF
    fuel = Number(prompt("Starting Fuel Level:")); // CHANGE
  }

  //b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). VALIDATE the entry.
  let numAstro = Number(prompt("Number of Astronauts:"));
  while (numAstro < 1 || numAstro > 7 || isNaN(numAstro)) {
    alert("You need between 1 to 7 astronauts to fly!");
    numAstro = Number(prompt("Number of Astronauts:"));
  }

  //c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
  console.log(`Blast off! ${numAstro} astronaut(s)`);
  console.log(` Altitude : Fuel`);
  console.log(` ${altitude} km : ${fuel} L`);

  fuel = fuel - 100 * numAstro; // INITIAL
  while (fuel >= 0) {           // CHECK
    altitude += 50;             // DO SOMETHING 1
    console.log(` ${altitude} km : ${fuel} L`); // DO SOMETHING 2
    fuel = fuel - 100 * numAstro; // CHANGE
  }
  // Output the resulting altitude with the phrase, “The shuttle gained an altitude of ___ km.”
  console.log(`The shuttle gained an altitude of ${altitude} km.`);
  // If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
  if (altitude >= 2000) {
    console.log("Orbit achieved.");
  } else {
    console.log("Failed to reach orbit.");
  }
}
