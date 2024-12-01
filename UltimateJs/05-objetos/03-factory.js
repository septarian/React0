

function createUser(name, email) {
    return {                                
        email,              //Es lo mismo que poner "email: email"
        name,
        activo: true,
        recuperarClave: function () {           //  FUNCION ANONIMA
            console.log('Recuperando archivo..')
        },
    };
}

let user1 = createUser('Jotaro', 'correo@random.com')
let user2 = createUser('Joseph', 'correspondencia@random.com')

console.log(user1, user2)