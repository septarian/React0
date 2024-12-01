let a = {};
let b = a;

b.prop = 1;
console.log(a, b)

/************************************************************/

let m = 1;

function suma(n){
    n++;
}

suma(m)
console.log(m)

/************************************************************/

let z = {prop: 1}

function sumas(y){          //Los objetos se pasan por referencia
    y.prop++;
}

sumas(z)
console.log(z)
