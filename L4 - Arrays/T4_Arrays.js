/*For each function, complete the question. Make sure to notice the OUTPUT requirement.
  !!! You can call your functions in the console or through prompt.  !!!  */

function t1() {
  /*  */
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
} //  5 array operations

function t2() {
  /* */
  let words = "ab,alks,qwe,qew,qwe,asd,asd";
  let wordArray = words.split(",");
  wordArray.sort();
  let joinedWords = wordArray.join(" ");
  console.log(joinedWords);
} // Using split and join
