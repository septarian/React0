let promesa1 = new Promise((res, rej) => {
    res(12)
});

let promesa2 = new Promise((res, rej) => {
    rej(15)
});

promesa1.then(valor => {
    if (valor > 10 ){
        return promesa2;
    }
}).then(valor2 => {                     //valor2 es igual al resultado que retorno el primer then
    return valor2
})
.catch(e => console.log(e))          //muestra los errores de una manera mas elegeante
.finally(() => console.log('estamos en finally!'))           //Finally se ejecuta siempre al finalizar las promesas aunque haya errores
