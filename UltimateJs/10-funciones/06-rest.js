function suma (a, b, ...rest) {         //el parametro "...rest" guarda todas los parametros que le estan mandando pero no esta recibiendo individualmente = (3, 4)
    console.log(rest);
}

suma(1,2,3,4)

const suma2 =  (a, b, ...rest) =>{         //Tambien funciona con fat arrow function
    console.log(rest);
}

suma2(1,2,3,4,5)

const msg = (desc, ...msgs) => {
    for (let i of msgs){
        console.log(desc, i);
    }
}

// msg('servidor:', 'Error 1', 'peticion aceptada')
let mensajes = ['Error 1', 'peticion aceptada']
msg('Cliente movil:', ...mensajes, 'Otro error');       //se le puede poner mas parametros despues del rest gracias al spread