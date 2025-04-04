let id;
function createDraggable(){
    let span = document.createElement('span');
    span.id = 'hola mundo';
    span.innerText = 'Arrastrable';
    span.draggable = true;                  //permite arrastrar el elemento
    span.ondragstart = e => {               //la funcion se activa cuando se empieza a arrastrar el objeto "span"
        id = e.target.id;                        //target = toda la funcion
    }

    return span
};

function createDropArea() {
    let dropArea = document.createElement('div');
    dropArea.className = 'drop';                 //Le asigna la clase de CSS que esta en el archivo html
    dropArea.ondragenter = e =>{                        //funcion que se activa cuando se arrstra un objeto dentro
        e.target.style.background = 'yellow';           //Background tiene mas prioridad que Background-color, al
    }

    dropArea.ondragleave = e => {                 //Se activa cuando sacas un objeto arrastrando del elemento
        e.target.style.background = '';         
    }

    dropArea.ondragover = e => e.preventDefault();              //Evita que se regrese el arrastrable a su posicion original al soltarlo
    dropArea.ondrop = e =>{                                     //Se activa cuando sueltas un arrastrable dentro del elemento, en este caso "dropAarea"
        e.target.appendChild(document.getElementById(id))
    }

    return dropArea;
}

let draggable = createDraggable();
let drop = createDropArea();
let drop2 = createDropArea();

document.body.append(drop);
document.body.append(drop2);
document.body.append(draggable);