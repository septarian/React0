const miArray = [
    "hola",
    12,
    "Mundo",
    {},
    ,{id: 15 },
    ['lala'],
];

function dividePorTipo(arr){
    return {                                                        //Devvuelvo un objeto con estas propiedades
        numeros: arr.filter(numero => typeof(numero) === 'number'),
        strings: arr.filter(string => typeof(string) === 'string'),
        objects: arr.filter(objeto => typeof(objeto) === 'object'),
    }
};

const nuevoArray = dividePorTipo(miArray);

console.log(nuevoArray);
