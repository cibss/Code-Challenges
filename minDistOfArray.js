function minDistance(arr) {
    arr.sort((a,b) => {
        return a - b
    })
    
    let i = 0;
    let distance = 1000000;
    const n = arr.length;

    for (let i = 0; i < (n - 1); i++) {
        let difference = Math.abs(arr[i+1] - arr[i])
        if (distance > difference) {
            distance = difference
        }
    }
    return distance
}

let arr = [8, 24, 3, 20, 1, 17];
console.log(minDistance(arr)); 

// Diberikan sebuah array dengan elemen tipe integer
// Keluarkan jarak terkecil elemen pada array tersebut
// Jarak di definisikan sebagai selisih mutlak (absolut) >= 0 dari pasangan elemen pada array
// Nilai elemen = [0..1000000]
// Panjang elemen = [2..100000]

// Contoh :
// Array = [8, 24, 3, 20, 1, 17]
// Jarak terkecil adalah 2 => (3-1)