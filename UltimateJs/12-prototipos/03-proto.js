function User() {
    this.name = 'hola mundo';
    //METODO DE INSTANCIA          (Cuando no tengas que optimizar tu codigo)
    this.logger = function () {
        console.log('loggeando...');
    }
};

//METODO DE PROTOTIPO              (Cuando quieras hacer una cadena de prototipos u optimizar tu codigo)
User.prototype.login = function () {            //Agregamos la funcion al prototipo de la funcion constructora por lo que todos sus objetos la tendran y se podran modificar igual
    console.log('Iniciando sesion', this.name);
    this.logger();
};

//Instancias
const user1 = new User();
const user2 = new User();

console.log(user1);