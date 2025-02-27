// const config = {
//     url: 'htpps://holamnundo.io',
//     direccion: {
//         calle: 'hola mundo',
//         numero: 80,
//     }
// }
const config = [
    'htpps://holamnundo.io',
    145,
    80,
]

function webserver({url, direccion: { calle } }) {     //saca la propiedad url del objeto que esta recibiendo
    // const url = config.url;
    // const { url } = config;     //del objeto de configuracion saca la propiedad de url y la guarda en una constante

    console.log(calle)
    return url;
}

function webserver2([url, ...rest]) {     //recibiendo arrays

    console.log(rest)
    return url;
}

// console.log(webserver(config));
console.log(webserver2(config));