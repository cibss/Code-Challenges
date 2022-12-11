function longestPrefix(x, y, array) {
    let arrayLength = array.length;
    let result = -1;
    let nX = 0;
    let nY = 0;

    for (let i = 0; i < arrayLength; i++) {
        if (array[i] === x) {
            nX += 1;
        }

        if (array[i] === y) {
            nY += 1;
        }

        if (nX === nY) {
            result = i;
        }
    }
    return result
}

console.log(longestPrefix(7,42, [6, 42, 11, 7, 1, 42]));
console.log(longestPrefix(6,21, [6, 42, 11, 7, 1, 42]));

// Diberikan dua bilangan X dan Y
// Diberikan sebuah array A
// Cari P sehingga [A[0], A[1], ..., A[P]] adalah prefix terpanjang yang memiliki jumlah kemunculan bilanagn X dan Y yang sama
// Jika tidak ada, kembalikan P = -1

// Contoh
// A = [6, 42, 11, 7, 1, 42]
// x = 7 , Y = 42
// Terpanjang => P = 4 (Index ke-4)