let numeros = [15, 10, -3];

numeros.sort();         //Ordena el array
numeros.reverse();      //Invierte el orden del array

console.log(numeros);


let letras = ['z','a','d'];

letras.sort();
console.log(letras);

let conMayusculas = ['Z', 'a', 'd'];        //Si una letra esta en mayuscula se pone primero con el sort debido a su valor ascii, al menos que hagas lo de abajo

conMayusculas.sort((a, b) => {          
    let alower = a.toLowerCase();
    let blower = b.toLowerCase();

    if(alower < blower ){
        return -1
    }
    if(alower > blower ){
        return 1
    }
    return 0
});           

console.log(conMayusculas);



let usuarios = [
    {edad: 21, nombre: 'Johnny'},
    {edad: 23, nombre: 'Gyro'},
    {edad: 30, nombre: 'Diego'},
];

usuarios.sort((a,b) => {
    if (a.edad < b.edad)  return -1;
    if (a.edad > b.edad)  return 1;
    return 0
});

console.log(usuarios)
