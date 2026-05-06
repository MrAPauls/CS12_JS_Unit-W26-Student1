/*For each function, complete the question. Make sure to notice the OUTPUT requirement.
  !!! You can call your functions in the console or through prompt.  !!!  */

function t1() {
  /*  1 Create an array ‘styles’ with items “Jazz” and “Blues”.
      2 Append “Rock-n-Roll” to the end.
      3 Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
      4 Strip off the first value of the array and show it.
      5 Prepend ‘Rap’ and ‘Reggae’ to the array. (Prepend means add to the beginning)*/
  let styles = ["Jazz", "Blues"];
  console.log(`Step 1: ${styles}`);

  styles.push("Rock'n'Roll");
  console.log(`Step 2: ${styles}`);

  // Find middle
  let middleIndex = (styles.length - 1) / 2;
  styles[middleIndex] = "Classics";
  console.log(`Step 3: ${styles}`);

  let firstItem = styles.shift();
  console.log(`Step 4: (first ${firstItem}) ${styles}`);

  styles.unshift("Rap", "Reggae");
  console.log(`Step 5: ${styles}`);
} //  5 array operations

function t2() {
  /*Start with the string “water,space suits,food,plasma sword,batteries”
	Use split to create an array of them, alphabetize the list and remake it into a string again. */
  let words = "water,space suits,food,plasma sword,batteries";
  let arrWords = words.split(",");
  arrWords.sort();
  let newWords = arrWords.join(",");
  console.log(newWords);
} // Using split and join
