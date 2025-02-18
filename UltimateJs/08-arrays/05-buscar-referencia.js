const usuarios = [
    {id: 1, name: 'Johnny'},
    {id: 2, name: 'Gyro'},
];

//PREDICATE: FUNCION QUE DEVUELVE TRUE O FALSE
const resultado = usuarios.find(function(usuario) {     //Se pone una funcion de argumento que busca si hay un elemento que coincide con lo que estoy buscando
    return usuario.id === 1;
});

const resultado2 = usuarios.findIndex(usuario => usuario.id === 2);      //Funciona igual de esta manera y es mas rapido y esta vez devuelve el indice de lo que busco

console.log(resultado);
console.log(resultado2);