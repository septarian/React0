let promesa1 = param1 => new Promise((res, rej) => {
    //calcular algo...
    const b = 'hola mundo'
    res(b)
});

let promesa2 = param2 => new Promise((res, rej) => {
    //calculamos algo...
    res(param2 + ', hola mundo')
});

let promesa3 = (param1, param2) => new Promise ((res, rej) => {
    res(johnny)
})

//Mala practica
// Promise.resolve('primer valor')
//     .then(a => {
//         return promesa1(a)
//             .then(b => {
//                 return promesa2(b).then(() => promesa3(a, b))
//             })
// })


async function main() {
    try{
        const a = await Promise.resolve(' primer valor ')           //con "await" el valor de a es igual al valor que resolvio la promesa, osea (primer valor)
        const b = await promesa2(a)
        const _ = await promesa2(b)
        promesa3(a, b)
    }
    catch (error){
        console.log({error})
    }
}

main()