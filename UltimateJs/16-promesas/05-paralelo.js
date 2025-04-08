const p1 = Promise.resolve(3);
const p2 = 42
const p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'foo');
})

// Promise.all([p1, p2, p3])               //Resuelve todas las promesas en paralelo
//     .then(valores => console.log('all', valores))
//     .catch(e => console.log('error en all', e));

// Promise.race([p1,p2,p3])                            //solo espera a la primera que se resuelva
//     .then(valores => console.log('race', valores))
//     .catch(e => console.log('error en race', e))

// Promise.any([p1,p2,p3])               //toma la primer que fue resuelta, si es rechazada la ignora
//     .then(valor => console.log( {valor} ))
//     .catch(e => console.log({ e }))

Promise.allSettled([p1,p2,p3])
    .then(valores => console.log({ valores }))
    .catch(e => console.log({ e }))