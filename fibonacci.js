const assert = require('assert');

function fibonacci(n) {
    assert(n > 0);

    if (n <= 2) {
        return 1;
    }

    let prev1 = 1;
    let prev2 = 1;

    for (let i = 0; i < n - 2; i++) { 
        let current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }
    return prev1;
}

console.log(fibonacci(4))

// Mencari angka fibonacci di urutan ke-n
