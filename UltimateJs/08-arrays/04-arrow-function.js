// const hola = () => {                 //fUNCION ANONIMA
//     return 'hola mundo'
// }

const hola = mensaje => mensaje + ' hola mundo';         //ES LO MISMO QUE LA DE ARRIBA (SOLO FUNCIONA SI LA FUNCION ES DE UNA LINEA)

const hola2 = (mensaje) => {                              //ES LO MISMO QUE LA DE ARRIBA
    return mensaje + ' hola mundo';
}      

const resultado = hola('Was me, Dio!');
console.log(resultado);

const resultado2 = hola2('que tal');
console.log(resultado2);