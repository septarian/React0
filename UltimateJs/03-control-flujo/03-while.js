//cuales son los numeros pares

let i = 0;
while (i < 10 ) {
    if (i % 2 == 0) {
        console.log(i,'Es numero par');
    } else {
        console.log(i, 'Es numero impar')
    }
    i++;
}

console.log('fuera del while')