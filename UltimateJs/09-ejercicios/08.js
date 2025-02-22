const usuarios = [
    {edad: 17, nombre: 'Johnny', plan: 'premium'},
    {edad: 13, nombre: 'Gyro', plan: 'free'},
    {edad: 32, nombre: 'Diego', plan: 'free'},
    {edad: 25, nombre: 'Valentine', plan: 'gold'},
];

let filtro = usuarios.filter(u => u.plan !== 'free')

let orden = filtro.sort((a, b) => {
    if(a.edad > b.edad ) return -1                  //-1 = A va antes, 1 = A va despues, 0 = no hay cambios
    if(a.edad < b.edad ) return 1
    return 0
})

let names = orden.map(n => `<li> ${n.nombre} </li>`)

// const html = `<ul>\n${names.join('\n')} \n</u>`          //Join convierte todo en STRING 

// Con el templete string todo se ordena en el html igual a como lo estructures en el codigo 
const html = `                                               
<ul>
    ${names.join(`
    `)}
</u>`          //Join convierte todo en STRING


console.log(html)