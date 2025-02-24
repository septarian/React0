// //  {
// //     url: ...
// //     bucket: amazon s3                    //Donde quiero almacenar los archivos de mi aplicacion
// //     port: 80
// //  }



// //APIS
// console.log(configurarAPI());
// console.log(configurarAPI('https://chaomundo.io'));


const config = {
    url: 'https://holamundo.io',
}




function configurarAPI2({url} = {url: 'por defecto'}){      //si no recibe nada, toma el valor de por defecto
    return `${url}`;
}

console.log(configurarAPI2());

function configurarAPI3(url, bucket = 145, puerto = 80){      
    return `${url}/${bucket}:${puerto}`;
}

console.log(configurarAPI3('https://holamundo.io'));