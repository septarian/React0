const now = new Date(); //Muestra la fecha y hora actual del dispositivo
// console.log(now)
// Mes DIa Año
const fecha = new Date('December 08 2001');
console.log(fecha)

const fecha2 = new Date(1986, 11, 25, 15, 34, 32);
const fecha3 = new Date(1986, 11, 25, 15+15, 34, 32);
console.log(fecha2)
console.log(fecha3)

console.log('datestring', fecha3.toDateString());
console.log('ISOString', fecha3.toISOString());   // Este formato de fecha es el que voy a utilizar para mandar fechas del cliente al servidor
console.log('timestring', fecha3.toTimeString());   // Este formato de fecha es el que voy a utilizar para mandar fechas del cliente al servidor

fecha3.setFullYear(1999)    //Con set cambio un valor y con get obtengo un valor
console.log(fecha3)

