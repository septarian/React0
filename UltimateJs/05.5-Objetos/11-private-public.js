function Usuario() {
    let id = 1
    this.name = 'Erick'

    let log = function(){       //Hace la variable privada
        console.log('Logging...')
    }

    this.guardar = function() {
        log()
        console.log('Guardando...')
    }
}

const usuario = new Usuario()
usuario.guardar()