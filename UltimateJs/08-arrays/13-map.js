const usuarios = [
    {edad: 17, nombre: 'Johnny'},
    {edad: 23, nombre: 'Gyro'},
    {edad: 30, nombre: 'Diego'},
    {edad: 35, nombre: 'Valentine'},
];

const lista = usuarios
    .filter(u => u.edad > 17)               // Crea un nuevo array con los ususarios que son mayores de 17
    .map(u => `<li>${u.nombre}</li>`);      //Crea un array en base a la funcion que le pasemos  (elemento, indice y array)

const html = `<ol>${lista.join('')}</ol>`;

console.log(html)

const mapped = usuarios.map(u => ({      //agrega la nueva propiedad "mayor" al usuario y pone true si cumple la condicion o false si no lo hace
    // return {
        ...u,
        mayor: u.edad > 17,
    // }
})                                       //Con el parentesis js se da cuenta que estamos devolviendo un objeto
);

console.log(mapped)
