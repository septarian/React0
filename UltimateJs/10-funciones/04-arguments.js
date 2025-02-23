function suma (a, b){
    let total = 0;
    for(let valor of arguments){    //arguments es un Iterador con todos los elementos que recibe la funcion
        total = total + valor;       //total += valor
    }
    return total                    //Acuerdate que funcion tiene que retornar algo
};

function suma2 (a, b){
    return Array.from(arguments).reduce((acc, el) => {       //El metodo "Array.from" toma los Iteradores y los transforma en arrays
        return acc + el                                     // Funciona para hacer la suma igual que en la funcion anterior
    })       
};

//console.log(suma(1));              //1 + undefined -> Nan -> not a number
console.log(suma2(1,2,3,4));       //1 + undefined -> Nan -> not a number