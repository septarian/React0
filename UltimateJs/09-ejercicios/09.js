const usuarios = [
    {edad: 17, nombre: 'Johnny', plan: 'premium'},
    {edad: 13, nombre: 'Gyro', plan: 'free'},
    {edad: 32, nombre: 'Diego', plan: 'free'},
];

const user = [
    {age: 20, name: 'Jonnatan', membership: 'premium'},
    {age: 24, name: 'William', membership: 'free'},
    {age: 30, name: 'Dio', membership: 'free'},
];

const users = usuarios.map(u => {
    return {                            //con el return sabe que estoy devolviendo un objeto
        age: u.edad,
        name: u.nombre,
        membership: u.plan,
    }
})

const globalUser = users
                        .concat(user)
                        .sort((a, b) => {
                            if (a.age < b.age ){
                                return -1
                            }
                            if (a.age > b.age ){
                                return 1
                            }
                            return 0
                        })
                        

list = globalUser.map(n => `<li> Nombre: ${n.name}, Edad: ${n.age} </li>`)

html = `<ol> 
    ${list.join(`
    `)}
</ol>`

console.log(html)