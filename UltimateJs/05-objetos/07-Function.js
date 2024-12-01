function Punto(x, y) {
    this.x = x;
    this.y = y;
    this.dibujar = function() {console.log('Dibujando...')};
}

punto = {z: 7}
//Punto.call(punto, 1, 2);   //El primer argumento es el contexto de "this", Call() sirve para extender objetos
Punto.apply(punto, [1,2])   //Hace lo mismo que "call()" pero los argumentos deben ser mandados como un array


console.log(punto);







const Point = new Function('x', 'y', `             
this.x = x;
this.y = y;
this.dibujar = function() {console.log('Dibujando...')}
`);                             //XD

const p = new Point(1, 2);
console.log(p)
