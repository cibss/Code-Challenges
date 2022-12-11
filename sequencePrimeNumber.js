let numberList = [];
let inputNumber = 10;

// 1
for (let i = 2; i <= inputNumber; i++) {
    numberList.push(i)  
}

// (2)
let primeList = numberList.map((num) => {
    // (3)
    let sqrt = Math.sqrt(num);
    // console.log(Math.floor(sqrt));

    // (4)
    for (let i = 2; i <= Math.floor(sqrt); i++) {
        // (5)
        if (num % i === 0) {
            return 1
        }
    }
    //(6)
    return num;
})

console.log('primeList', primeList);

// You should avoid the else case and return only after for loop completion. 
// Although for loop count can be reduced by updating condition to i <= Math.sqrt(num)

// THE FLOW
// (1) List all number at maximum based on inputNumber, starting from 2
// Ex: inputNumber = 5 , numberList = [2, 3, 4, 5]
// (2) Map all the numbers to be check
// (3) Square the number to reduce the loop count
// (4) If the sqrt is lower than 2, skip this code and continue to (6)
// (5) If num modulo i = 0 , return 1 , because this is not a prime number
// (6) Return a prime number

