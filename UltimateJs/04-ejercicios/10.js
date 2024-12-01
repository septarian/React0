let longitud = 7;

function createArray(n) {
    if (n <= 0) {
        return [];
    }

    let value = []
    let idx = 0
    for (idx;idx < n;idx++) {
        value[idx] = idx + 1
    }
    return value
}

let result = createArray(longitud)
console.log(result)