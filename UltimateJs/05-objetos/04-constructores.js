function Usuario() {        //Las funciones constructoras siempre usan UpperCamelCase
    this.id = 1;            // SIEMPRE QUE QUIERA AGREGAR UNA PROPIEDAD A LA FUNCION DEBE LLEVAR "this"
    this.recuperarClave = function () {     //AL ESTAR DENTRO DE OTRA DEJA DE LLAMARSE FUNCION Y SE LLAMA METODO
        console.log('Recuperando clave...')
    }
}

let user = new Usuario();       //PARA CREAR UN OBJETO EN LA FUNCION CONSTRUCTORA SIEMPRE DEBE DE LLEVAR "new"

console.log(user)