const Entidad = {
    save() {
        console.log('guardando entidad')
    }
};

class User{        
    constructor(name) {                
        this.name = name;
    }
}

Object.setPrototypeOf(User.prototype, Entidad)

const u = new User('Johnny');
u.save();