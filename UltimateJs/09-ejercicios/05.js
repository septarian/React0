const usuarios = [
    {edad: 17, nombre: 'Johnny', plan: 'premium'},
    {edad: 13, nombre: 'Gyro', plan: 'premium'},
    {edad: 32, nombre: 'Diego', plan: 'free'},
    {edad: 25, nombre: 'Valentine', plan: 'gold'},
];

function obtenerMayor(user){
    
    return user.reduce((acc, el) => {           //Si no establecemos valor inicial de acc, automaticamente inicia siendo el primer objeto del array (Johnny)
        if(acc.edad < el.edad){
            acc = el;
        }
        return acc

    });
};

const mayor = obtenerMayor(usuarios);

console.log(mayor);