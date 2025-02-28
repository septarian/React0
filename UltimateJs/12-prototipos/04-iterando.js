function User(){
    this.name = "Hola Mundo"
}

User.prototype.login = function() {
    console.log('Iniciando sesion', this.name)
}

let user = new User();

for (prop in user){
    if (!user.hasOwnProperty(prop)){      //Si el objeto esta en el prototipo del objeto y no es del propio objeto constructor lo muestra
        console.log(prop)
    }
}

console.log(Object.keys(user))      //Devuelve un array con las propiedades que sean propia del objeto 