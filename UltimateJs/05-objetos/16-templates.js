
const nombre = 'Erick';

// con esas comillas especiales puedes escribir el texto que quieras y llamar variables con signo de dollar y llaves
const plantilla =  `Hola ${nombre}!    

Bienvenidos a "Ultimate JavaScript" :)

Saludos Erick.`

console.log(plantilla);

/******************************************************************* */

function plantillas(name)  {
    return `Hola ${name}!    

Bienvenidos a "Ultimate JavaScript" :)

Saludos Erick.`
}

console.log(plantillas('Fernando'));
