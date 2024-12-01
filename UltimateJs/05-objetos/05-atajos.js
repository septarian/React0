let obj = {};
let obj2 = new Object();          //SON LO MISMO

function User(){
    this.name = 'Erick'
};

let user = new User();
console.log(user.constructor)

const s1 = "1 + 1";
const s2 = new String("1 + 1");
console.log(eval(s1), eval(s2));             //Funcion que evalua
console.log(s2.valueOf());             //Funcion que muestra su valor cuando son por ejemplo un string creado con el constructor