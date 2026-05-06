/*For each function, complete the question. Make sure to notice the OUTPUT requirement.
  !!! You can call your functions in the console or through prompt.  !!!  */

/* 
Function: number_generator
	In: n - how many numbers to generate,    L - lowest number ,  H - highest number
	Do:  Randomly generate n numbers in the range L to H that are all unique. Return sorted list.
	Out: sorted unique number list
*/

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function number_generator() {
  let n = Number(prompt("How many numbers to generate?"));
  let L = Number(prompt("What is the lowest number?"));
  let H = Number(prompt("What is the highest number?"));

  let randNum = 0;

  let numArr = []; // INITIAL (array is empty)
  while (numArr.length < n) {
    // CHECK (if my array length is less than n)
    randNum = getRandomIntInclusive(L, H); // DO		(generate rand num, check if unique,)
    if (!numArr.includes(randNum)) {
      numArr.push(randNum); // CHANGE ( add unique number to array)
    }
  }
  //   console.log(numArr);     // DEBUG (console.log my unsorted array)

  return numArr.sort((a, b) => a - b);
} // number_generator
