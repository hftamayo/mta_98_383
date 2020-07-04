console.log("este es un mensaje");
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.heigth = window.innerHeight;

//creacion de un objeto que hereda todas las propiedades de Context
var contexto = canvas.getContext('2d');
//fillRect(x, y, ancho, alto)
contexto.fillRect(100, 100, 100, 100)
contexto.fillRect(400, 300, 100, 100)
contexto.fillRect(300, 300, 100, 100)
//por hacer: que las cajas anteiores se desplieguen en el navegador
console.log(canvas);
