function disemvowel(str) {
//   let vowels = ["a", "i", "u", "e", "o", "A", "I", "U", "E", "O"];

//   vowels.map((v) => {
//     if (str.includes(v)) {
//       str = str.split(v).join("");
//     }
//   });

//   return str;

  // Best Practice 
  return str.replace(/[aeiou]/gi, '');
}

console.log(disemvowel('This website is for losers LOL!'))

// Write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.