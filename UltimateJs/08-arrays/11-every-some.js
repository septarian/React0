let usuarios = [
    {id:1, activo: true},
    {id:2, activo: false},
    {id:3, activo: false},
];

let todosActivos = usuarios.every(u => {        //se ejecuta hasta que en este caso un usuario le de false
    console.log('todos activos', u.id);
    return u.activo;
})

console.log(todosActivos)

let algunoActivo = usuarios.some(u => {         //se ejecuta hasta que encuentre un True
    console.log(u.id);
    return u.activo
})

console.log(algunoActivo)
