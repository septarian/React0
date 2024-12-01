function Usuario (name) {
    this.name = name;
}

console.log(Usuario.name)   //Nombre de la funcion
console.log(Usuario.length) // Cantidad de argumentos que recibe una funcion

const U = Usuario           //Se puede guardar funciones en otras variables
let user = new U('Erick')

console.log(user)

function of(Fn, arg) {  //LAS FUNCIONES PUEDEN RECIBIR OTRAS FUNCIONES COMO ARGUMENTOS
    return new Fn(arg)
}

let user1 = of(Usuario, 'Johnny');  //USO DE "FUNCTION OF"
console.log(user1)

function returned() {      
    return function() {      //PUEDES RETORNAR FUNCIONES
        console.log('Hola mundo')
    }
}

let saludo = returned()     //Asignas a la variable la funcion que esta retornando
saludo()                    //Se convierte en la funcion y se puede llamar