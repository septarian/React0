const user = {id: 10};

user.name = 'Erick'
user.guardar = function () {
    console.log('Guardando', user.name)
}

user.guardar();

delete user.name
delete user.guardar
console.log(user)

const user1 = Object.freeze({id: 1})   //Sirve para que no se pueda modificar ni agregar nada al objeto 
const user2 = Object.seal({id: 1})   //Sirve para que no se pueda agregar nada al objeto
user1.name = 'Fernando';
user2.id = 2;
console.log(user1);
console.log(user2);