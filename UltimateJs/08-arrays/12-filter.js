const usuarios = [
    {edad: 15, nombre: 'Johnny'},
    {edad: 17, nombre: 'Gyro'},
    {edad: 30, nombre: 'Diego'},
    {edad: 35, nombre: 'Valentine'},
]

const mayores = usuarios.filter(u => u.edad > 17)       //Crea un nuevo array con los objetos que cumplan esa condicion    (elemento, indice y array)

console.log(mayores)