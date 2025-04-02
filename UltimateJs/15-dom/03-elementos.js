let el = document.createElement('p');

el.innerText = "Elemento creado";               //agregamos texto al elemento html, en este caso es un parrafo

document.body.append(el);

// el.innerText = "Elemento creado";
// el.innerHTML = "<ul><li>Elemento Creado</li></ul>"           //podemos agregar etiquetas html 

el.style = 'background-color: red; font-weight: bold;'          //Podemos asignarle estilos Css al elemento
el.className = 'parrafo';
el.id = 'mi-parrafo';
//lo siguiente no sirve
//el.mipropiedad = 'mi propiedad'

el.setAttribute('mipropiedad', 'mi propiedad');                  //agregamos una etiqueta personalizada y lo que va a tener (nombre, valor)
el.getAttribute('mipropiedad');                                 //Obtiene los valores del atributo
el.hasAttribute('mipropiedad');                                 //Revisa si tiene una propiedad en especifico