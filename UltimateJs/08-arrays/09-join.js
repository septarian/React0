let arr1 = ['Johnny', 'Gyro', 'Diego'];
let mensaje = arr1.join(', ');          //Muestra cada contenido del array juntos y los separa con lo que le pongas, en este caso es una coma y un espacio
console.log(mensaje);

let saludos = "Hola mundo desde NZ";
let dividido = saludos.split(" ")       //crea un array basandose en cada elemento del array que este separado por lo que le pongas, en este caso son espacios     
console.log(dividido.join('-'));        //Los vuelve a juntar con guiones en vez de espacios (util para crear URL)
