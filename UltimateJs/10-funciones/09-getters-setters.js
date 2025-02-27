const usuario = {
    nombre: 'johnny',
    apellido: 'joestar',
    get nombreCompleto() {      //el get permite acceder a la funcion como si fuera una propiedad normal
        return `${usuario.nombre} ${usuario.apellido}`      
    },
    set nombreCompleto(valor) {          //Set signa un nuevo valor.  todos los setters deben recibir un parametro
        const [nombre, apellido] = valor.split(' ');        //devuelve un array con nombre y apellido separados y a continuacion los asignamos sus respectivas propiedades
        this.nombre = nombre;
        this.apellido = apellido;
    }
};

usuario.nombreCompleto = 'Hola Mundo'
console.log(usuario.nombreCompleto);