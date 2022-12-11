function alphabetPosition(text) {
//   let regExp = /[^a-z]\s/g;
//   let filteredText = text.replace(regExp, "");
//   filteredText = filteredText.replace(".", "");

//   let arr = [];
//   for (let i = 0; i < filteredText.length; i++) {
//     if (filteredText[i] !== " ") {
//       let charCode = 0;
//       charCode = parseInt(filteredText[i], 36) - 9;
//       charCode = charCode.toString();
//       if (charCode !== "NaN" && charCode > 0) {
//         arr.push(charCode);
//       }
//     }
//   }

//   return arr.join(" ");

  // Best Practice
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map( (c) => c.charCodeAt() - 64)
    .join(' ');
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )