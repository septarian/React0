// (function saludar(...rest){
//     console.log(this, rest)
// }).bind({ propiedad: 'hola gente'})(1, 8)               //Cambiando el contexto de this con bind



// //podemos ver los metodos de una funcion como si fuera un objeto
// saludar.call({ propiedad: 'hola gente'}, 1,5)              // Propiedad ahora es el contexto de this gracias a Call()
// saludar.apply({ propiedad: 'hola gente'}, [1,5])              // Hace lo mismo que Call pero los argumentos se pasan como un Array
// /*let nuevoSaludar =*/ 
// saludar.bind({ propiedad: 'hola gente'}) (3, 5)                    // Bind solo cambia el contexto de this pero devuelve una funcion
// // nuevoSaludar(1, 4)

// saludar()

//////////////////////////////////////////////////////////////

const usuario = {
    nombre: 'johnny',
    ciudadanias: ['mexico', 'morioh', 'egipto'],
    
    mostrarCiudadanias() {
        this.ciudadanias.forEach(function (ciudadania) {            
            console.log(this.nombre, ciudadania)                                       
    }.bind(this));                                            
    } 

};

usuario.mostrarCiudadanias()
