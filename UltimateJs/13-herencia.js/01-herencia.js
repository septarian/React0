function User() {
    this.name = 'Hola mundo';
}

function Product(){
    this.name = 'Producto'
}


function Entidad(){
}
Entidad.prototype.save = function(){
    console.log('Guardando...', this.name)
}
Entidad.prototype.validate = function(){
    console.log('Validando...', this.name)
}

// User.prototype = Entidad.prototype;              //Forma de heredar el prototipo de entidad al objecto constructor User
// User.prototype.constructor = User;

// User.prototype = Object.create(Entidad.prototype)       //Otra forma de heredar. Recibe un objeto como argumento y ese objeto sera el prototipo que se asignara al objeto User
// User.prototype.constructor = User;

Object.setPrototypeOf(User.prototype, Entidad.prototype);       //El primer argumento es el prototipo al que quieres asignarle uno nuevo y el segundo argumento es el prototipo que vas a asignar
Object.setPrototypeOf(Product.prototype, Entidad.prototype); 

const user = new User();
console.log(user);