//HTMLElement
let htmlElement = document.getElementById('cuerpo');         //Obtiene un elemento por su ID en el intex.html

//HTMLCollection -> Se parece a un array pero no lo es
let elementosRed = document.getElementsByClassName('red');                     //Obtiene elementos por su clase de CSS

//NodeList
let elementosName = document.getElementsByName("johnny");               //obtiene elementos por su NAME

// HTMLCollection
let parrafos = document.getElementsByTagName('p');              //Obtiene el tipo de elementos que se le ponga (en este caso son los parrafos)

//HTMLElement <- solo un elemento
let el = document.querySelector('#cuerpo');                      //obtiene los elementos con la consuta que se le ponga (en este caso el ID cuerpo)
//NodeList
let els = document.querySelectorAll('p');


let nuevoP = document.createElement('p');                    //CREA UN NUEVO ELEMENTO (EN ESTE CASO ES UN PARRAFO)
document.body.append(nuevoP);                               //agrega al body del html el nuevo elemento creado

