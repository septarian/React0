class Restaurants {
    #timetable;                 //Propiedad privada
    constructor(name) {
        this.name = name;
    }

    get timetable(){            //GET es para obtener un valor y SET es para asignar un valor
        return this.#timetable
    }
    set timetable(value){
        let date = new Date(value);
        let time = date.getTime();
        if (Number.isNaN(time)) {
            throw new Error('Fecha invalida')
        }
        this.#timetable = date
    }

}

const r = new Restaurants('BBQ');

r.timetable = '1 march 1978';

