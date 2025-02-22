const usuarios = [
    {edad: 17, nombre: 'Johnny', plan: 'premium'},
    {edad: 13, nombre: 'Gyro', plan: 'premium'},
    {edad: 32, nombre: 'Diego', plan: 'free'},
    {edad: 25, nombre: 'Valentine', plan: 'gold'},
];

function cuantosPremium(user){

    return user
        .filter(u => u.plan !== 'free')
        .reduce((acc, el) => acc + 1, 0 )

}

function cuantosMayores(user){
    return user
        .filter(u => u.edad > 17)
        .reduce((acc, el) => acc + 1, 0 )
    
}

console.log(cuantosPremium(usuarios));
console.log(cuantosMayores(usuarios));