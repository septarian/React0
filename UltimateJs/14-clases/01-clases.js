// function User(name) {
//     this.name = name;
//     this.instancia = function () {}
// }

// User.prototype.login = function () {
//     console.log('Hola mundo')
// }

class User {
    constructor(name){
        this.name = name
        this.instancia = function () {}
    }

    activo = true

    login() {
        console.log('hola mundo')
    }
}

const u = new User('Johnny')