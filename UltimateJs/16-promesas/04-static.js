let promesa1 = new Promise((res, rej) => {
    res(5)
});

let promesa2 = new Promise((res, rej) => {
    res(15)
});

promesa1.then(valor => {
    if (valor > 10 ){
        return promesa2;
    }
    //return Promise.reject('Valor menor que 10');
    return Promise.resolve(555);                        //Aunque el valor sea menor a 10, esto la resuelve y retorna el valor de 555
})
.then(valor2 => {                     //valor2 es igual al resultado que retorno el primer then
    console.log('segunda promesa', valor2)
    return valor2;
})
.catch(e => console.log(e))          //muestra los errores de una manera mas elegeante
.finally(() => console.log('estamos en finally!'))           //Finally se ejecuta siempre al finalizar las promesas aunque haya errores
