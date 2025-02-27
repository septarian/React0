// Dentro de un objeto: this hace referencia a un objeto
// Dentro de una funcion: This hace referencia al objeto window, global
// Si se usa "new" hace referencia al objeto que sera creado

const user = {
    name: 'johnny',
    login(){
        console.log(this)
    },
}

user.login()

// function log(){
//     console.log(this)
// }

// log()
function Log(mensaje){         //funcion constructora
    this.mensaje = mensaje
    console.log(this)
}

/*          New
    Se crea un objeto literal
    se vincula este objeto a this
    se vincula el prototipo
    si no retorna nada, entonces retorna this
*/ 
const l = new Log('hola')