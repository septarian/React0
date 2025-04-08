let promesa1 = new Promise((res, rej) => {
    res(12)
});

let promesa2 = new Promise((res, rej) => {
    res(15)
});

promesa1.then(valor => {
    if (valor > 10 ){
        return promesa2;
    }
}).then(valor2 => {                     //valor2 es igual al resultado que retorno el primer then
    return valor2
})