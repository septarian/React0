//Fat ARROW FUNCTIONS 
//No tienen ARGUMENTS 
//super, this
//Fat arrow functions son una version reducida de las funciones, solo deben ser usadas para realizar calculos
const suma = (a,b) => {
    return Array.from(arguments).reduce((acc, el) => {       
        return acc + el                                     
    })       
};


console.log(suma(1,2,3,4));       