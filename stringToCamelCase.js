// Complete the method/function so that it converts dash/underscore delimited words into camel casing.
// The first word within the output should be capitalized only if the original word was capitalized
// (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// MY ANSWER
// function toCamelCase(str) {
//   let splitStr;

//   if (str === "") {
//     return "";
//   } else if (str.includes("-")) {
//     splitStr = str.split("-");
//   } else {
//     splitStr = str.split("_");
//   }

//   let convertedString = splitStr[0];

//   for (let i = 1; i < splitStr.length; i++) {
//     convertedString += capitalize(splitStr[i]);
//   }

//   return convertedString;
// }

// function capitalize(str) {
//   return str[0].toUpperCase() + str.slice(1);
// }

// BEST PRACTICE
function toCamelCase(str) {
  var regExp = /[-_]\w/gi;
  return str.replace(regExp, function (match) {
    return match.charAt(1).toUpperCase();
  });
}

console.log(toCamelCase("the-stealth-warrior"));
