let el = document.createElement('p');
el.innerText = 'Elemento creado';

//texto y nodos
document.body.append(el);

el.remove();                //borra el elemento del DOM

document.body.prepend(el);      //agrega el elemento al body al principio y no al final

let div = document.createElement('div');
div.innerText = 'soy un texto';

el.replaceWith(div);                //remplaza el elemento "el" con el "div"

document.body.replaceChild(el, div);
document.body.removeChild(el);
document.body.appendChild(el);

document.body.insertBefore(div, el);        //queremos insertar el div antes del elemento parrafo

document.body.insertAdjacentElement('beforebegin', div);        //agrega el elemento antes de la etiqueta body
document.body.insertAdjacentElement('afterbegin', div);        //agrega el elemento dentro del body al comienzo
document.body.insertAdjacentElement('beforeend', div);        //agrega el elemento al final justo antes de cerrarse el body
document.body.insertAdjacentElement('afterend', div);        //agrega el elemento despues de que se cierre la etiqueta body

document.body.insertAdjacentHTML();                         //agrega elementos html
document.body.insertAdjacentText();                         //agrega solo texto