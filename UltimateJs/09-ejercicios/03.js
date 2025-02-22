const usuarios = [
    {edad: 17, nombre: 'Johnny', plan: 'premium'},
    {edad: 13, nombre: 'Gyro', plan: 'free'},
    {edad: 32, nombre: 'Diego', plan: 'free'},
    {edad: 25, nombre: 'Valentine', plan: 'gold'},
];

function getPaidUsers(user) {

    return user.filter(u => u.plan === 'premium' || u.plan === 'gold')

}

console.log(getPaidUsers(usuarios))