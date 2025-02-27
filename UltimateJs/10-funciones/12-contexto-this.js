const usuario = {
    nombre: 'johnny',
    ciudadanias: ['mexico', 'morioh', 'egipto'],
    
    mostrarCiudadanias(){
        const x = this.ciudadanias.forEach(ciudadania => {            //ForEach Funciona igual a Map pero no retorna nada (itera cada elemento)
            console.log(this.nombre, ciudadania)                                         //Escribe cada elemento del array en cada renglon
    });                                             //Si queremos usar this en una funcion para referenciar una propiedad del objeto, la funcion debe ser una FAT ARROW; Porque estas no tienen contexto de this
    } 

};

usuario.mostrarCiudadanias()