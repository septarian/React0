const numeros = [1,2,3,4,];
                                                    // Reduce se ejecuta por cada uno de los elementos que estan dentro del array
const suma = numeros.reduce((acc, el) => {          //(ARGUMENTOS: acumulador, elemento que estamos iterando, valor inicial que va a tener el acumulador)
    return acc + el;
}, 0);          

console.log(suma)

///////////////////////////////////////////////////////////////////

const anidado = [[1,2], 3, [4,5]];      //se va a iterar 3 veces porque tiene 3 elementos
//queremos aplanar este array con reduce para que quede asi [1,2,3,4,5]

const plano = anidado
    .reduce((acc,el) => acc.concat(el), []);

console.log(plano);

///////////////////////////////////////////////////////////////////

const usuarios = [
    {edad: 21, nombre: 'Johnny'},
    {edad: 23, nombre: 'Gyro'},
    {edad: 30, nombre: 'Diego'},
    {edad: 35, nombre: 'Valentine'},
];

const indexado = usuarios.reduce((acc,el) => ({
    ...acc,
    [el.nombre]: el,

}), {});

console.log(indexado)