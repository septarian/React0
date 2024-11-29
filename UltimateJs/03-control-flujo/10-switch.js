let accion = 'Actualizar';

switch (accion) {
    case 'listar':
        console.log('Accion de listar')
        break;                              //Se debe poner el break al final de un case sino todo lo que sigue sera ejecutado
    case 'guardar':
        console.log('Accion de guardar');
        break;          
    default:
        console.log('Accion no reconocida')                    //Se debe poner el break al final de un case sino todo lo que sigue sera ejecutado
}