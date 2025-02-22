const miArray = [
    "hola",
    12,
    true,
    "Mundo",
    {},
    ,{id: 15 },
    ['lala'],
];

function dividePorTipo(arr){

    return arr.reduce((acc, el) => {
        let llave = typeof el;

        acc[llave] = acc[llave] ? acc[llave] : [];       //Verificamos que acc tenga datos
        acc[llave].push(el)
        return acc
    }, {} )







    // return {            
    //     boolean: arr.filter(bool => typeof(bool) === 'boolen'),                                            //Devvuelvo un objeto con estas propiedades
    //     numeros: arr.filter(numero => typeof(numero) === 'number'),
    //     strings: arr.filter(string => typeof(string) === 'string'),
    //     objects: arr.filter(objeto => typeof(objeto) === 'object'),
    // }
};

const nuevoArray = dividePorTipo(miArray);

console.log(nuevoArray);