const MAX_COUNT = 200;

function getFlipCount(src, dst) {
    if (src === dst) {
        return 0;
    }
    if ((src + dst) === 7) {
        return 2;
    }
    return 1;
}

function getMinimumFlip(array) {
    let minCount = MAX_COUNT;

    for (let i = 1; i < 7; i++) {
        let count = 0;
        
        for (let a of array) {
            count += getFlipCount(a, i)
        }

        if (minCount > count) {
            minCount = count;
        }
    }
    return minCount;
}

console.log(getMinimumFlip([1, 2, 3]))

// Kita punya N buah dadu standar (1 - 6)
// Masing-masing permukaan dadu diberikan dalam array A
// Hitung berapa kali kita harus memutar dadu sehinga kita mendapatkan N dadu dengan nilai muka yang sama

// Contoh
// [1, 2, 3] => Kita bisa memutar Dadu1 1x dan Dadu2 1x, sehingga didapatkan dadu dengan nilai muka [3, 3, 3]
// Kita bisa membuat [1, 1, 1] atau [2, 2, 2], jumlah putaran tetap 2x
// N = [1...100], 1 <= A[i] <= 6

