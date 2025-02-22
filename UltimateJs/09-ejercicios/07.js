const usuarios = [
    {edad: 17, nombre: 'Johnny', plan: 'premium'},
    {edad: 13, nombre: 'Gyro', plan: 'free'},
    {edad: 32, nombre: 'Diego', plan: 'gold'},
    {edad: 25, nombre: 'Valentine', plan: 'free'},
];


function groupBy(arr, prop) {

    return arr.reduce((acc, el) => {
        let valor = el[prop];

        acc[valor] = acc[valor] ? acc[valor] : [];       //pregunta si es undefined, si si es regresa un array
        acc[valor].push(el)
        return acc
    }, {})
    

};

const grouped = groupBy(usuarios, 'plan');
console.log({ grouped });                   //crea un objeto con la propiedad grouped (grouped: grouped)