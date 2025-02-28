function getProto(u) {
    return Object.getPrototypeOf(u);
}

function Entidad() {
}

Entidad.prototype.save = function () {
    console.log('guardando desde entidad...')
}

function User() {}

// Method Override  (REMPLAZAR EL METODO)
User.prototype.save = function () {
    console.log('Guardando desde user...')
}

Object.setPrototypeOf(User.prototype, Entidad.prototype);

const u = new User();
console.log(getProto(Object.getPrototypeOf(u)).save())       // Dirige al prototipo del usuario