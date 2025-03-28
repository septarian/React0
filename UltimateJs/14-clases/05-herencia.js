class Entidad {
    constructor(id) {
        this.id = id;
        this.created_at = new Date();
    }
    save() {}
};

class User extends Entidad{         //Utilizamos el codigo de una clase padre, en este caso es Entidad
    constructor(name) {
        super(1);                   //Llama al constructor padre para que funcione [constructor(id)]
        this.name = name;
    }
}

const u = new User('Johnny');