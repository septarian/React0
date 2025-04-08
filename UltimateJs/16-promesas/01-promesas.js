//PENDING = PENDIENTE
//REJECTED = RECHAZADA
//TERMINADA = FULFILLED

//-CONSULTAS A BASES DE DATOS
//-PETICIONES A SERVIDORES
//-WEBWORKERS

let promesa = new Promise((resolve, reject) => {    //promesa es un objeto de la funcion promesa que rescibe los metodos resolve y reject
    //resolve(42);
    //setTimeout(() => resolve(42), 10000);
    setTimeout(() => reject('Error de carga'), 1000); 
})

promesa.then(                       //recibe 2 funciones, en caso de que se ejecute o se rechace respectivamente
    valor => console.log(valor),
    e => console.log('error', e)
)