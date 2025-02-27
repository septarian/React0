                            //SWEETALERT.    SENTRY.

function sumaTodo(arr){
    if(!Array.isArray(arr)){             //En caso de que NO sea un array se ejecuta
        //EXEPCION ES CUANDO LANZAS LOS ERRORES CON THROW
        throw new Error('El parametro no es un array')       //Pone lo que va a decir el error
    }
    return arr.reduce((acc, el) => {
        if(typeof el !== 'number' || Number.isNaN(el)){         //Si el elemento no es un numero se ejecuta esa logica
            throw new Error(`Elemento ${el} no es un numero`)
        }
        return acc + el
    })
}


// console.log(sumaTodo([1,2,3,4]))
// Los objetos no pueden utilizar el metodo reduce

try {                               //Intenta ejecutar el codigo
console.log(sumaTodo([1,2,NaN, 'HOLA']));
} catch (error) {                   //Si falla entonces catch lo recibe como parametro y despues lo podemos mostrar. Sirve para que la aplicacion no falle
    console.log(error.message)      //muestra lo que escribiste en el throw error
}