class Restaurants {
    constructor(name) {
        this.name = name
    }

    getTimetable(){     //obtener horario
        console.log('horario restaurante')
    }

    static getRestaurant(id) {              //Metodo estatico es un metodo que pertenece a la clase pero no pertenece a la instancia del objeto
        return new Restaurants('BBQ')
    }
}

const r = Restaurants.getRestaurant(12)


const arr = new Array()
Array.isArray()                 //Sirve para saber si es un array
Array.from()                    //Sirve para transformar un iterable en un array
Object.assign()