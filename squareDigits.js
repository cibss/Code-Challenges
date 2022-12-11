function squareDigits(num) {
//   let digits = num.toString().split("");
//   let realDigits = digits.map(Number);

//   let results = realDigits.map((number) => {
//     return Math.pow(number, 2);
//   });

//   let joinedDigits = results.join("");
//   return parseInt(joinedDigits);

    // Best Practice
    return Number(('' + num).split('').map(function (val) { 
        return val * val;
    }).join(''));
}

console.log(squareDigits(3212));

// You are asked to square every digit of a number and concatenate them.
//cFor example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer
